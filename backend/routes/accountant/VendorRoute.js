const {
  createVendor,
  deleteVendor,
  getAllVendor,
  getVendor,
  updatedVendor,
  getAllVendorWithReport,
  getVendorForTaskManager,
} = require("../../controllers/accountant/VendorController")

const express = require("express");
const route = express.Router();

route.post("/vendor", createVendor);
route.get("/vendors", getAllVendor);
route.get("/vendor/:id", getVendor);
route.patch("/vendor/:id", updatedVendor);
route.delete("/vendor/:id", deleteVendor);
route.post("/taskmanager/vendor", getVendorForTaskManager);
route.get("/vendor-with-byc",getAllVendorWithReport);

module.exports.vendorRoute = route;
