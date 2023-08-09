const expressAsyncHandler = require("express-async-handler");
const BillModel = require("../../models/accountant/BillModel");
const PaymentMade = require("../../models/accountant/PaymentMade");
const Handlebars = require("handlebars");
const fsp = require("fs").promises;
const fs = require("fs")
const path = require("path");
const puppeteer = require("puppeteer");
const Organisation = require("../../models/organisation/OrganisationSchema");
const { v4: uuidv4 } = require("uuid");
const Vendor = require("../../models/accountant/VendorModel");
const { createTemplateToPdf, removeFile } = require("./service/common");
const Smtp = require("../../models/Admin/Master/smtp");
const nodemailer = require("nodemailer");
const EmailService = require("./service/email.service");



const generatePaymentMadeTemplate = async (payment, organisation, hostUrl) =>{
  const paymentData = {
    organisation,
    payment,
    hostUrl,
  };


  Handlebars.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
  });

  const templateFilePath = path.join(
    __dirname,
    "..",
    "..",
    "template",
    "paymentmade-receipts.html"
  );
  const template = Handlebars.compile(
    await fsp.readFile(templateFilePath, "utf8")
  );

  let reciept = template(paymentData);

  return reciept;
}

module.exports.getPaidBillsByVendorId = expressAsyncHandler(
  async (req, res) => {
    const vendorId = req.params.vendorId;
    const paidBills = await Bill.find({
      orgNumber: req.orgNumber,
      vendorId,
      $expr: { $gt: ['$billTotal', '$amountPaid'] },
    });
    res.status(200).json({ success: true, paidBills });
  }
);

module.exports.createVendorPayment = expressAsyncHandler(async (req, res) => {
  const uuid = uuidv4();

  // Extract a 6-digit number from the UUID
  const uniqueNumber = Math.abs(parseInt(uuid.replace(/-/g, ""), 16) % 1000000);

  const paymentMade = await PaymentMade.create({
    ...req.body,
    orgNumber: req.orgNumber,
    paymentNumber: uniqueNumber,
  });

  // Adding amountExess payment  to Vendor

  for (const bill of paymentMade.bills) {
    const paymentAmount = bill.paymentAmount;
    await Bill.findByIdAndUpdate(
      bill._id,
      {
        $inc: { amountPaid: paymentAmount },
      },
      { new: true }
    );
  }
  

  res.status(200).json({ success: true, paymentMade });

  const payment = await PaymentMade.findOne({ _id: paymentMade._id })
    .populate("vendorId")
    .lean();

  const organisation = await Organisation.findOne({
    orgNumber: req.orgNumber,
  }).lean();

  const hostUrl = req.protocol + "://" + req.headers.host;

  const paymentTemplate = await generatePaymentMadeTemplate(
    payment,
    organisation,
    hostUrl
  );
  const filename = `${payment.paymentNumber}-${req.orgNumber}`;

  const filePath = await createTemplateToPdf(paymentTemplate, filename);


  // Send Payment Reciept

  const emailservice = new EmailService(req.orgNumber);

  const subjectText = `${payment.vendorId.firstName}, Thank You for Your Payment - Receipt #${payment.paymentNumber} `;

  const mailed = await emailservice.sendEmailWithAttachment(
    payment.vendorId.email,
    filePath,
    subjectText,
    filename
  );

  await removeFile(filePath);

  
});

module.exports.deletePaymentMade = expressAsyncHandler(async (req, res) => {
  const paymentId = req.params.paymentId;

  // Retrieve the payment made to be deleted
  const paymentMade = await PaymentMade.findById(paymentId);

  if (!paymentMade) {
    res
      .status(404)
      .json({ success: false, message: "Payment Made not found" });
    return;
  }

  // Delete the paid payment
  await PaymentMade.findByIdAndDelete(paymentId);

  // Update the amountDue for associated bills
  for (const bill of paymentMade.bills) {
    const { _id } = bill;

    // Find the latest amountDue from the bill's history
    const latestBill = await Bill.findById(_id).sort({ updatedAt: -1 });

    if (latestBill) {
      await Bill.findByIdAndUpdate(
        _id,
        {
          $inc: {paymentMade: -bill.paymentAmount},
  
        },
        { new: true }
      );
    }
  }

  res
    .status(200)
    .json({ success: true, message: "Payment Made deleted successfully" });
});

module.exports.getAllPaymentMades = expressAsyncHandler(
  async (req, res) => {
    const paymentMades = await PaymentMade.find({
      orgNumber: req.orgNumber,
    }).populate("vendorId");
    res.status(200).json({ success: true, paymentMades });
  }
);

module.exports.getVendorPaymentById = expressAsyncHandler(
  async (req, res) => {
    const paymentMade = await PaymentMade.findById(
      req.params.paymentId
    );

    res.status(200).json({ success: true, paymentMade });
  }
);

module.exports.showPayementReceipetHtmlById = expressAsyncHandler(
  async (req, res) => {
    const payment_id = req.params.id;
   
    const orgNumber = req.orgNumber;

    const payment = await PaymentMade.findOne({ _id: payment_id })
      .populate("vendorId")
      .lean();

    const organisation = await Organisation.findOne({
      orgNumber: orgNumber,
    }).lean();

    const hostUrl = req.protocol + "://" + "admin.didm.in";
    const paymentTemplate = await generatePaymentMadeTemplate(
      payment,
      organisation,
      hostUrl
    );

    res.setHeader("Content-Type", "text/html").send(paymentTemplate);
  }
);

async function sendPaymentRecieptEmail(SMTP, payment, filePath) {
  /** ------------ NodeMailer  ----------- */


  let transporter = nodemailer.createTransport({
    host: SMTP.server,
    port: SMTP.port,
    auth: {
      user: SMTP.userName,
      pass: SMTP.password,
    },
  });

  const info = await transporter.sendMail({
    from: `"${SMTP.yourName}" <${SMTP.emailFrom}>`,
    to: `${payment.vendorId.email}`,
    subject: `You Paymnent has been paid ${payment.paymentNumber} is Here`,
    text: "Download Your Payement Reciept PDF",
    attachments: [
      {
        filename: `${payment.paymentNumber}.pdf`,
        path: filePath,
      },
    ],
  });

  return info;
}

module.exports.downloadPdf = expressAsyncHandler(async (req, res) => {
  const payment_id = req.params.id;
  const orgNumber = req.orgNumber;

  const payment = await PaymentMade.findOne({ _id: payment_id })
    .populate("vendorId")
    .lean();

  const organisation = await Organisation.findOne({
    orgNumber: orgNumber,
  }).lean();

  const hostUrl = req.protocol + "://" + req.headers.host;
  const paymentTemplate = await generatePaymentMadeTemplate(
    payment,
    organisation,
    hostUrl
  );
  const filename = `${payment.paymentNumber}-${req.orgNumber}`;

  const filePath = await createTemplateToPdf(paymentTemplate, filename);

  const fileStream = fs.createReadStream(filePath)
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`); // Updated variable name
  res.setHeader('Content-Type', 'application/pdf');

  fileStream.pipe(res);

  // Delete the PDF file after it has been sent to the client
  fileStream.on('end', async () => {
    removeFile(filePath)
  });
});

module.exports.generatePaymentMadeTemplate = generatePaymentMadeTemplate