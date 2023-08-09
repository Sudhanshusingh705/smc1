const expressAsyncHandler = require("express-async-handler");
const Vendor = require("../../models/accountant/VendorModel");
const puppeteer = require("puppeteer");
const Handlebars = require("handlebars");
const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const Organisation = require("../../models/organisation/OrganisationSchema");
const Bill = require("../../models/accountant/BillModel");
const Smtp = require("../../models/Admin/Master/smtp");
const {
  sendBillEmail,
  createTemplateToPdf,
  removeFile,
} = require("./service/common");
const EmailService = require("./service/email.service");

const generateBillTemplate = async (bill, organisation, hostUrl) => {
  const billData = {
    organisation,
    bill,
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
    "inventory-bill.html"
  );
  const billTemplate = Handlebars.compile(
    await fsp.readFile(templateFilePath, "utf8")
  );

  let billHtml = billTemplate(billData);

  return billHtml;
};

module.exports.createBill = expressAsyncHandler(async (req, res, next) => {
  const bill = await Bill.create({
    ...req.body,
    orgNumber: req.orgNumber,
  });
  if (!bill) {
    res.status(403).json({
      success: false,
      massege: "Not able to create bill",
    });
  }
  res.status(201).json({
    success: true,
    bill,
  });
});

module.exports.updateBill = expressAsyncHandler(async (req, res, next) => {
  const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!bill) {
    res.status(403).json({
      success: false,
      massege: "unble to update Bill ",
    });
  }
  res.status(200).json({
    success: true,
    bill,
  });
});

module.exports.deleteBill = expressAsyncHandler(async (req, res, next) => {
  const bill = await Bill.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
  });
});

module.exports.getBill = expressAsyncHandler(async (req, res, next) => {
  const bill = await Bill.findById(req.params.id);
  res.status(200).json({
    success: true,
    bill,
  });
});

module.exports.getAllBill = expressAsyncHandler(async (req, res, next) => {
  const bills = await Bill.find({ orgNumber: req.orgNumber }).populate(
    "vendorId",
    "companyName"
  );

  res.status(200).json({
    success: true,
    bills,
  });
});

module.exports.createAndSendBill = expressAsyncHandler(
  async (req, res, next) => {
    const bill = await Bill.create({
      ...req.body,
      orgNumber: req.orgNumber,
    });
    await bill.populate("vendorId taxId");
    const organisation = await Organisation.findOne({
      orgNumber: req.orgNumber,
    });

    // Generate bill Template
    const hostUrl = req.protocol + "://" + req.headers.host;
    const billHtml = await generateBillTemplate(
      bill.toJSON(),
      organisation.toJSON(),
      hostUrl
    );

    // Generate bill Pdf
    const filename = `${bill.billNumber}-${req.orgNumber}`;
    const filePath = await createTemplateToPdf(billHtml, filename);

    // Send Inovice To Email

    const emailservice = new EmailService(req.orgNumber);

    const subjectText = `${bill.vendorId.firstName}, Secure Your Copy of bill #${bill.billNumber} `;

    const mailed = await emailservice.sendEmailWithAttachment(
      bill.vendorId.email,
      filePath,
      subjectText,
      filename
    );

    if (mailed) {
      res.status(200).json({
        success: true,
        message: `Bill has been sent To ${bill.vendorId.companyName}`,
      });
      await removeFile(filePath);
    }
  }
);

module.exports.updateAndSendBill = expressAsyncHandler(
  async (req, res, next) => {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    await bill.populate("vendorId taxId");
    const organisation = await Organisation.findOne({
      orgNumber: req.orgNumber,
    });

    // Generate bill Template
    const hostUrl = req.protocol + "://" + req.headers.host;
    const billHtml = await generateBillTemplate(
      bill.toJSON(),
      organisation.toJSON(),
      hostUrl
    );

    // Generate Bill Pdf

    const filename = `${bill.billNumber}-${req.orgNumber}`;
    const filePath = await createTemplateToPdf(billHtml, filename);

    // Send Bill To Email

    const emailservice = new EmailService(req.orgNumber);

    const subjectText = `${bill.vendorId.firstName}, Secure Your Copy of Bill #${bill.billNumber} `;

    const mailed = await emailservice.sendEmailWithAttachment(
      bill.vendorId.email,
      filePath,
      subjectText,
      filename
    );

    if (mailed) {
      res.status(200).json({
        success: true,
        message: `Bill has been sent To ${bill.vendorId.companyName}`,
      });
      await removeFile(filePath);
    }
  }
);

module.exports.generateBillNumber = expressAsyncHandler(async (req, res) => {
  const bill = await Bill.find({ orgNumber: req.orgNumber })
    .sort({ billNumber: -1 })
    .limit(1)
    .lean();

  const number = bill.length > 0 ? bill[0].billNumber.split("-")[1] : "000";

  let numberAsInt = parseInt(number, 10);
  let incrementedNumberAsInt = numberAsInt + 1;
  let incrementedNumberAsString = incrementedNumberAsInt.toString();
  let paddedIncrementedNumber = incrementedNumberAsString.padStart(
    number.length,
    "0"
  );

  const billNumber = `INV-${paddedIncrementedNumber}`;

  res.status(201).json({ success: "true", billNumber });
});

module.exports.showBillHtmlById = expressAsyncHandler(async (req, res) => {
  const bill_id = req.params.id;
  const orgNumber = req.orgNumber;

  const bill = await Bill.findOne({ _id: bill_id }).populate(
    "vendorId taxId"
  );

  const organisation = await Organisation.findOne({
    orgNumber: orgNumber,
  });
  const hostUrl = req.protocol + "://" + "admin.didm.in";
  const billTemplate = await generateBillTemplate(
    bill?.toJSON(),
    organisation?.toJSON(),
    hostUrl
  );

  res.setHeader("Content-Type", "text/html").send(billTemplate);
});

module.exports.sendBillToEmail = expressAsyncHandler(async (req, res, next) => {
  const bill = await Bill.findById(req.params.id);

  await bill.populate("vendorId taxId");
  const organisation = await Organisation.findOne({
    orgNumber: req.orgNumber,
  });

  // Generate bill Template
  const hostUrl = req.protocol + "://" + req.headers.host;
  const billHtml = await generateBillTemplate(
    bill.toJSON(),
    organisation.toJSON(),
    hostUrl
  );

  // Generate bill Pdf
  const filename = `${bill.billNumber}-${req.orgNumber}`;
  const filePath = await createTemplateToPdf(billHtml, filename);

  // Send Bill To Email

  const emailservice = new EmailService(req.orgNumber);

  const subjectText = `${bill.vendorId.firstName}, Secure Your Copy of Bill #${bill.billNumber} `;

  const mailed = await emailservice.sendEmailWithAttachment(
    bill.vendorId.email,
    filePath,
    subjectText,
    filename
  );

  if (mailed) {
    res.status(200).json({
      success: true,
      message: `Bill has been sent To ${bill.vendorId.companyName}`,
    });
    await removeFile(filePath);
  }
});

module.exports.downloadPdf = expressAsyncHandler(async (req, res) => {
  const bill = await Bill.findById(req.params.id);

  await bill.populate("vendorId taxId");
  const organisation = await Organisation.findOne({
    orgNumber: req.orgNumber,
  });

  // Generate bill Template
  const hostUrl = req.protocol + "://" + "admin.didm.in";
  const billHtml = await generateBillTemplate(
    bill.toJSON(),
    organisation.toJSON(),
    hostUrl
  );

  // Generate bill Pdf
  const filename = `${bill.billNumber}-${req.orgNumber}`;
  const filePath = await createTemplateToPdf(billHtml, filename);

  const fileStream = fs.createReadStream(filePath);
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`); // Updated variable name
  res.setHeader("Content-Type", "application/pdf");

  fileStream.pipe(res);

  // Delete the PDF file after it has been sent to the client
  fileStream.on("end", async () => {
    removeFile(filePath);
  });
});

module.exports.generateBillTemplate = generateBillTemplate;
