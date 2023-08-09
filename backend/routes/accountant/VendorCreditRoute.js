const { createVendorCredit, getAllCreditNote } 
= require("../../controllers/accountant/VendorCreditController");

const express= require("express");
const { isAuth } = require("../../middlewares/isAuth");
const route = express.Router();

route.post("/vendorcredits",isAuth, createVendorCredit)
route.get("/vendorcredits",isAuth, getAllCreditNote)

module.exports.VendorCreditRoutes = route