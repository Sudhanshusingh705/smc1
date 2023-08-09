/**
 * Email service for sending emails with attachments.
 */

const Smtp = require("../../../models/Admin/Master/smtp");
const nodemailer = require("nodemailer")
class EmailService {
    /**
     * Create an instance of the EmailService.
     * @param {string} orgNumber - The organization number associated with the email service.
     */
    constructor(orgNumber) {
      this.orgNumber = orgNumber;
    }
  
    /**
     * Find SMTP data for the organization.
     * @returns {Promise<object|null>} - Resolves with the SMTP data if found, null otherwise.
     */
    async findSmtpData() {
      return await Smtp.findOne({ orgNumber: this.orgNumber, for: "Sales" });
    }
  
    /**
     * Create a transporter for sending emails.
     * @param {string} server - The SMTP server address.
     * @param {number} port - The SMTP server port.
     * @param {string} userName - The username for authentication.
     * @param {string} password - The password for authentication.
     * @returns {Promise<object>} - Resolves with the created transporter.
     */
    async createTransporter(server, port, userName, password) {
      return nodemailer.createTransport({ host: server, port, auth: { user: userName, pass: password } });
    }
  
    /**
     * Send an email with attachments.
     * @param {object} mailTo - Receiver email
     * @param {string} filePath - The path to the attachment file.
     * @param {string} subjectText - The subject of the email.
     * @param {string} attachmentName - The name of the attachment file.
     * @returns {Promise<object|boolean>} - Resolves with the sent email info or false if SMTP data is not found.
     */
    async sendEmailWithAttachment(mailTo, filePath, subjectText, attachmentName) {
      const smtpData = await this.findSmtpData();
  
      if (!smtpData) {
        return false;
      }
  
      const transporter = await this.createTransporter(smtpData.server, smtpData.port, smtpData.userName, smtpData.password);
  
      const info = await this.sendEmail(
        transporter,
        `"${smtpData.yourName}" <${smtpData.emailFrom}>`,
        mailTo,
        subjectText,
        "Download Your PDF",
        [{ filename: `${attachmentName}.pdf`, path: filePath }]
      );
  
      return info;
    }
  
    /**
     * Send an email using the provided transporter.
     * @param {object} transporter - The nodemailer transporter instance.
     * @param {string} from - The email sender.
     * @param {string} to - The email recipient.
     * @param {string} subject - The subject of the email.
     * @param {string} text - The email text.
     * @param {object[]} attachments - The attachments array.
     * @returns {Promise<object>} - Resolves with the sent email info.
     */
    async sendEmail(transporter, from, to, subject, text, attachments) {
      return await transporter.sendMail({ from, to, subject, text, attachments });
    }
  }

  module.exports = EmailService