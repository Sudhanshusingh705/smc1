const express = require("express");

const {

    createPurchaseOrder,
    getPurchaseOrder,
    updatePurchaseOrder,
    deletePurchaseOrder,
    getAllPurchaseOrders,
 
    generatePurchaseOrderNumber,
    showPurchaseOrderHtmlById,
    createAndSendPurchaseOrder,
    updateAndSendPurchaseOrder,
    sendPurchaseOrderToEmail,
    convertPurchaseOrderToBill,
    downloadPdf,

} = require("../../controllers/accountant/PurchaseOrderController");
const {isAuth} = require("../../middlewares/isAuth");

const route = express.Router();

route.post("/purchaseorder",isAuth, createPurchaseOrder);
route.get("/purchaseorder/:id",isAuth, getPurchaseOrder);
route.patch("/purchaseorder/:id",isAuth, updatePurchaseOrder);
route.delete("/purchaseorder/:id",isAuth, deletePurchaseOrder);
route.get("/purchaseorders",isAuth, getAllPurchaseOrders);
route.get("/generatePurchaseOrderNumber",isAuth, generatePurchaseOrderNumber);

route.get("/show-purchaseorder-html/:id",isAuth, showPurchaseOrderHtmlById);

route.post("/purchaseorder/send-to-email",isAuth, createAndSendPurchaseOrder);
route.patch("/purchaseorder/send-to-email/:id",isAuth, updateAndSendPurchaseOrder);
route.get("/purchaseorder/send-to-email/:id",isAuth, sendPurchaseOrderToEmail);

route.patch("/purchaseorder-to-bill/:purchaseorderId",isAuth, convertPurchaseOrderToBill);
route.get("/download-purchaseorder/:id",isAuth, downloadPdf);

module.exports.purchaseOrderRoute = route;
