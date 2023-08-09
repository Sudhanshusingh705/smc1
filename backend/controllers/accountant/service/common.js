const { default: puppeteer } = require("puppeteer");
const Smtp = require("../../../models/Admin/Master/smtp");
const Handlebars = require("handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const fs = require("fs").promises;

async function removeFile(filePath) {
  try {
    const stat = await fs.stat(filePath);
    const exists = stat.isFile();

    if (exists) {
      await fs.rm(filePath);
      console.log("File removed successfully.");
    }
  } catch (err) {
    console.error(err);
  }
}

async function createTemplateToPdf(template, filename) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(template, {
    timeout: 60000,
    waitUntil: "networkidle2",
  });

  const pdfPath = `${__dirname}/../../../Public/pdf/${filename}.pdf`;
  await page.pdf({
    format: "A4",
    path: pdfPath,
    printBackground: true,
  });


  await browser.close();
  return pdfPath;
}

async function sendExpenseEmail(orgNumber, expense, filePath) {
  const smtpData = await Smtp.findOne({
    orgNumber: orgNumber,
    for: "Purchase",
  });

  if (!smtpData) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpData.server,
    port: smtpData.port,
    auth: {
      user: smtpData.userName,
      pass: smtpData.password,
    },
  });

  const info = await transporter.sendMail({
    from: `"${smtpData.yourName}" <${smtpData.emailFrom}>`,
    to: `${expense.customerId.email}`,
    subject: `Your expense ${expense.expenseNumber} is Here`,
    text: "Download Your Expense PDF",
    attachments: [
      {
        filename: `${expense.expenseNumber}.pdf`,
        path: filePath,
      },
    ],
  });

  return true;
}
async function sendBillEmail(SMTP, bill, filePath) {
  /** ------------ NodeMailer  ----------- */
  console.log(bill.customerId.email);

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
    to: `${bill.customerId.email}`,
    subject: `Your Bill ${bill.billNumber} is Here`,
    text: "Download Your Bill PDF",
    attachments: [
      {
        filename: `${bill.billNumber}.pdf`,
        path: filePath,
      },
    ],
  });

  return info;
}

module.exports = {
  removeFile,
  createTemplateToPdf,
  sendExpenseEmail,
  sendBillEmail,
};
