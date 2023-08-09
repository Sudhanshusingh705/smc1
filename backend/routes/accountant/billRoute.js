const express = require("express");

const {
    createBill,
    updateBill,
    deleteBill,
    getBill,
    getAllBill,
    
    createAndSendBill,
    updateAndSendBill,
    generateBillNumber,
    showBillHtmlById,
    sendBillToEmail,
    downloadPdf,
} = require("../../controllers/accountant/BillController");

const { isAuth } = require("../../middlewares/isAuth");

const route = express.Router();

route.post("/bill",isAuth, createBill);
route.patch("/bill/:id",isAuth, updateBill);
route.delete("/bill/:id",isAuth, deleteBill);
route.get("/bill/:id",isAuth, getBill);
route.get("/bills/",isAuth, getAllBill);

route.post("/bill/send-to-email",isAuth, createAndSendBill);
route.patch("/bill/send-to-email/:id",isAuth, updateAndSendBill);
route.get("/generateBillNumber",isAuth, generateBillNumber);
route.get("/show-bill-html/:id",isAuth, showBillHtmlById);
route.get("/bill/send-to-email/:id",isAuth, sendBillToEmail);
route.get("/download-bill/:id",isAuth, downloadPdf);

module.exports.billRoute = route;
