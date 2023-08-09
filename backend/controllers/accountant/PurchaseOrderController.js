const expressAsyncHandler = require("express-async-handler");
const PurchaseOrder = require("../../models/accountant/PurchaseOrder");
const Organisation = require("../../models/organisation/OrganisationSchema");
const puppeteer = require("puppeteer");
const Handlebars = require("handlebars");
const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const Smtp = require("../../models/Admin/Master/smtp");
const {
  removeFile,
  createTemplateToPdf,
  sendPurchaseOrderEmail,
} = require("./service/common");
const Bill = require("../../models/accountant/BillModel");
const EmailService = require("./service/email.service");

module.exports.createPurchaseOrder = expressAsyncHandler(async (req, res, next) => {
  try {
    const purchaseorder = await PurchaseOrder.create({
      ...req.body,
      orgNumber: req.orgNumber,
    });

    if (!purchaseorder) {
      return res.status(404).json({
        success: false,
        message: "Failed to create purchaseorder. Vendor not found.",
      });
    }

    res.status(200).json({
      success: true,
      purchaseorder,
    });
  } catch (error) {
    console.error("Error creating purchaseorder:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create purchaseorder.",
    });
  }
});

module.exports.createAndSendPurchaseOrder = expressAsyncHandler(
  async (req, res, next) => {
    const purchaseorder = await PurchaseOrder.create({
      ...req.body,
      orgNumber: req.orgNumber,
    });

    await purchaseorder.populate("vendorId");

    const organisation = await Organisation.findOne({
      orgNumber: req.orgNumber,
    });

    // Generate purchaseOrder Template
    const hostUrl = req.protocol + "://" + req.headers.host;
    const purchaseorderHtml = await generatePurchaseOrderTemplate(
      purchaseorder.toJSON(),
      organisation.toJSON(),
      hostUrl
    );

    // Generate purchaseorder Pdf
    const filename = `${purchaseorder.purchaseOrderNumber}-${req.orgNumber}`;
    const filePath = await createTemplateToPdf(purchaseorderHtml, filename);

    
    // Send PurchaseOrder To Email

    const emailservice = new EmailService(req.orgNumber);

    const subjectText = `${purchaseorder.vendorId.firstName}, Secure Your Copy of PurchaseOrder #${purchaseorder.purchaseOrderNumber} `;

    const mailed = await emailservice.sendEmailWithAttachment(
      purchaseorder.vendorId.email,
      filePath,
      subjectText,
      filename
    );

    if (mailed) {
      res.status(200).json({
        success: true,
        message: `PurchaseOrder has been sent To ${purchaseorder.vendorId.email}`,
      });
      // Remove pdf
      await removeFile(filePath);
    }
  }
);

module.exports.updatePurchaseOrder = expressAsyncHandler(async (req, res, next) => {
  const purchaseorder = await PurchaseOrder.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!purchaseorder) {
    return res.status(403).json({
      success: false,
      message: "unable to update vendor",
    });
  }

  res.status(200).json({
    success: true,
    purchaseorder,
  });
});

module.exports.updateAndSendPurchaseOrder = expressAsyncHandler(
  async (req, res, next) => {
    const purchaseorder = await PurchaseOrder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    await purchaseorder.populate("vendorId");

    const organisation = await Organisation.findOne({
      orgNumber: req.orgNumber,
    });

    // Generate purchaseOrder Template
    const purchaseorderHtml = await generatePurchaseOrderTemplate(
      purchaseorder.toJSON(),
      organisation.toJSON()
    );

    // Generate purchaseOrder Pdf
    const filename = `${purchaseorder.purchaseOrderNumber}-${req.orgNumber}`;
    const filePath = await createTemplateToPdf(purchaseorderHtml, filename);

    //Send purchaseOrder to Email

    const emailservice = new EmailService(req.orgNumber);
    const subjectText = `${purchaseorder.vendorId.firstName}, Secure Your Copy of PurchaseOrder #${purchaseorder.purchaseOrderNumber} `;

    const mailed = await emailservice.sendEmailWithAttachment(
      purchaseorder.vendorId.email,
      filePath,
      subjectText,
      filename
    );erence

    if (mailed) {
      res.status(200).json({
        success: true,
        message: `PurchaseOrder has been sent To ${purchaseorder.vendorId.email}`,
      });
      // Remove pdf
      await removeFile(filePath);
    }
  }
);

module.exports.getPurchaseOrder = expressAsyncHandler(async (req, res, next) => {
  const purchaseorder = await PurchaseOrder.findById(req.params.id);
  res.status(200).json({
    success: true,
    purchaseorder,
  });
});

module.exports.deletePurchaseOrder = expressAsyncHandler(async (req, res, next) => {
  const purchaseorder = await PurchaseOrder.findByIdAndDelete(req.params.id);

  const filename = `${purchaseorder.purchaseOrderNumber}-${req.orgNumber}`;
  const pdfPath = `${__dirname}/../../Public/pdf/${filename}.pdf`;

  res.status(200).json({
    success: true,
  });

  await removeFile(pdfPath);
});

module.exports.getAllPurchaseOrders = expressAsyncHandler(async (req, res, next) => {
  const purchaseorders = await PurchaseOrder.find({ orgNumber: req.orgNumber }).populate(
    "vendorId",
    "companyName"
  );

  res.status(200).json({
    success: true,
    purchaseorders,
  });
});

module.exports.generatePurchaseOrderNumber = expressAsyncHandler(
  async (req, res, next) => {
    const purchaseorder = await PurchaseOrder.find({ orgNumber: req.orgNumber })
      .sort({ purchaseOrderNumber: -1 })
      .limit(1)
      .lean();

    const number =
      purchaseorder.length > 0 ? purchaseorder[0].purchaseOrderNumber.split("-")[1] : "000";

    const numberAsInt = parseInt(number, 10);
    const incrementedNumberAsInt = numberAsInt + 1;
    const incrementedNumberAsString = incrementedNumberAsInt.toString();
    const paddedIncrementedNumber = incrementedNumberAsString.padStart(
      number.length,
      "0"
    );

    const purchaseOrderNumber = `EST-${paddedIncrementedNumber}`;

    res.status(201).json({ success: true, purchaseOrderNumber });
  }
);

async function generatePurchaseOrderTemplate(purchaseorder, organisation, hostUrl) {
  const purchaseorderData = {
    organisation,
    purchaseorder,
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
    "inventory-estimate.html"
  );
  const purchaseorderTemplate = Handlebars.compile(
    await fsp.readFile(templateFilePath, "utf8")
  );

  const purchaseorderHtml = purchaseorderTemplate(purchaseorderData);

  return purchaseorderHtml;
}

module.exports.sendPurchaseOrderToEmail = expressAsyncHandler(
  async (req, res, next) => {
    const purchaseorder = await PurchaseOrder.findById(req.params.id);
    await purchaseorder.populate("vendorId");

    const organisation = await Organisation.findOne({
      orgNumber: req.orgNumber,
    });

    // Generate purchaseorder Template
    const hostUrl = req.protocol + "://" + req.headers.host;
    const purchaseorderHtml = await generatePurchaseOrderTemplate(
      purchaseorder.toJSON(),
      organisation.toJSON(),
      hostUrl
    );

    console.log(hostUrl);

    // Generate purchase Pdf
    const filename = `${purchaseorder.purchaseOrderNumber}-${req.orgNumber}`;
    const filePath = await createTemplateToPdf(purchaseorderHtml, filename);

    // Send Purchase to Email
    const emailservice = new EmailService(req.orgNumber);

    const subjectText = `${purchaseorder.vendorId.firstName}, Secure Your Copy of PurchaseOrder #${purchaseorder.purchaseOrderNumber} `;

    const mailed = await emailservice.sendEmailWithAttachment(
      purchaseorder.vendorId.email,
      filePath,
      subjectText,
      filename
    );
    if (mailed) {
      res.status(200).json({
        success: true,
        message: `PurchaseOredr has been sent To ${purchaseorder.vendorId.email}`,
      });
      // Remove pdf
      await removeFile(filePath);
    } else {
      res.status(400).json({
        success: false,
        message: `Internal server Error`,
      });
      await removeFile(filePath);
    }
  }
);

module.exports.showPurchaseOrderHtmlById = expressAsyncHandler(async (req, res) => {
  const purchaseorderId = req.params.id;
  const orgNumber = req.orgNumber;

  const purchaseorder = await PurchaseOrder.findOne({ _id: purchaseorderId }).populate(
    "vendorId"
  );

  const organisation = await Organisation.findOne({
    orgNumber: orgNumber,
  });

  const hostUrl = req.protocol + "://" + "admin.didm.in";

  const purchaseorderTemplate = await generatePurchaseOrderTemplate(
    purchaseorder.toJSON(),
    organisation.toJSON(),
    hostUrl
  );

  res.setHeader("Content-Type", "text/html").send(purchaseorderTemplate);
});

//@function for converting purchaseorder to bill

module.exports.convertPurchaseOrderToBill = expressAsyncHandler(
  async (req, res) => {
    const { purchaseorderId } = req.params;

    // Find the purchaseorder by ID
    const purchaseorder = await PurchaseOrder.findById(purchaseorderId);

    if (!purchaseorder) {
      return res.status(404).json({ message: "PurchaseOrder not found" });
    }
    console.log(purchaseorder);

    async function generateBillNumber() {
      const bill = await Bill.find({ orgNumber: req.orgNumber })
        .sort({ billNumber: -1 })
        .limit(1)
        .lean();

      const number =
        bill.length > 0 ? bill[0].billNumber.split("-")[1] : "000";

      let numberAsInt = parseInt(number, 10);
      let incrementedNumberAsInt = numberAsInt + 1;
      let incrementedNumberAsString = incrementedNumberAsInt.toString();
      let paddedIncrementedNumber = incrementedNumberAsString.padStart(
        number.length,
        "0"
      );

      const billNumber = `INV-${paddedIncrementedNumber}`;
      return billNumber;
    }

    function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = String(currentDate.getMonth() + 1);
      let day = String(currentDate.getDate());

      // Pad the month and day with leading zeros if necessary
      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }

      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
    }

    function calculateDueDate() {
      const currentDate = new Date();
      const dueDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days in milliseconds

      const year = dueDate.getFullYear();
      let month = String(dueDate.getMonth() + 1);
      let day = String(dueDate.getDate());

      // Pad the month and day with leading zeros if necessary
      if (month.length < 2) {
        month = "0" + month;
      }
      if (day.length < 2) {
        day = "0" + day;
      }

      const formattedDueDate = `${year}-${month}-${day}`;
      return formattedDueDate;
    }

    // Create a new bill based on the purchaseorder data
    const newBill = new Bill({
      userId: purchaseorder?.userId,
      orgNumber: purchaseorder?.orgNumber,
      vendorId: purchaseorder?.vendorId,
      purchaseOrderNumber: await generateBillNumber(), // Implement a function to generate a unique bill number
      purchaseOrderDate: getCurrentDate(), // Implement a function to get the current date
      purchaseOredrDueDate: calculateDueDate(), // Implement a function to calculate the due date
      purchaseOrderItems: purchaseorder?.purchaseOrderItems,
      purchaseOrderTotal: purchaseorder?.purchaseOrderTotal,
      purchaseOrderSubtotal: purchaseorder?.purchaseOrderSubtotal,
      discountType: purchaseorder?.discountType,
      discount: purchaseorder?.discount,
      taxId: purchaseorder?.taxId,
      taxAmount: purchaseorder?.taxAmount,
      termsAndConditions: purchaseorder?.termsAndConditions,
      createdBy: purchaseorder?.vendorId,
    });

    // Save the new bill
    const savedBill = await newBill.save();

    // Return the converted bill
    res.status(200).json({ bill: savedBill });
    await PurchaseOrder.findByIdAndDelete(purchaseorderId);
  }
);

module.exports.downloadPdf = expressAsyncHandler(async (req, res) => {
  const purchaseorder = await PurchaseOrder.findById(req.params.id);
  await purchaseorder.populate("vendorId");

  const organisation = await Organisation.findOne({
    orgNumber: req.orgNumber,
  });

  // Generate PurchaseOrder Template
  const hostUrl = req.protocol + "://" + req.headers.host;
  const purchaseorderHtml = await generatePurchaseOrderTemplate(
    purchaseorder.toJSON(),
    organisation.toJSON(),
    hostUrl
  );

  // Generate PurchaseOrder Pdf
  const filename = `${purchaseorder.purchaseOrderNumber}-${req.orgNumber}`;
  const filePath = await createTemplateToPdf(purchaseorderHtml, filename);

  const fileStream = fs.createReadStream(filePath);
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`); // Updated variable name
  res.setHeader("Content-Type", "application/pdf");

  fileStream.pipe(res);

  // Delete the PDF file after it has been sent to the client
  fileStream.on("end", async () => {
    removeFile(filePath);
  });
});
