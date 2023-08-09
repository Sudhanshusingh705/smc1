const express = require("express");
const {
    getAllPaymentMades,
    createVendorPayment,
    getPaidBillsByVendorId,
    deletePaymentMade,
    getVendorPaymentById,
    showPayementReceipetHtmlById,
    downloadPdf,
} = require("../../controllers/accountant/PaymentMade");
const { isAuth } = require("../../middlewares/isAuth");

const route = express.Router();

route.post("/payment-made/",isAuth, createVendorPayment);
route.get("/Paid-bills/:vendorId",isAuth, getPaidBillsByVendorId);
route.delete("/paid-payment/:paymentId",isAuth, deletePaymentMade);
route.get("/paid-payment/:paymentId",isAuth, getVendorPaymentById);
route.get("/show-payment-reciept-html/:id",isAuth, showPayementReceipetHtmlById);
route.get("/download-payment-reciept/:id",isAuth, downloadPdf);
route.get("/payment-mades",isAuth, getAllPaymentMades);

module.exports.paymentMadeRoute = route;
