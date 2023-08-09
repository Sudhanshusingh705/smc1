const expressAsyncHandler = require("express-async-handler");
const Vendor = require("../../models/accountant/VendorModel");
const redisClient = require("../../services/RedisService");

module.exports.createVendor = expressAsyncHandler(async (req, res ) => {
  try {
    const vendor = await Vendor.create({
      ...req.body,
      orgNumber: req.orgNumber,
      branchId: req.branchId,
    });

    const updatedVendor = await Vendor.aggregate([
      { $match: { _id: vendor._id } },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "vendorId",
          as: "invoices",
        },
      },
      {
        $project: {
          userId: 1,
          orgNumber: 1,
          companyName: 1,
          companyDiplayName: 1,
          currency: 1,
          email: 1,
          vendorType: 1,
          firstName: 1,
          lastName: 1,
          openingBalance: 1,
          pan: 1,
          paymentTerm: 1,
          phone: 1,
          website: 1,
          shippingAddress: 1,
          billingAddress: 1,

          receivableAmount: {
            $sum: { $subtract: [{ $sum: "$invoices.invoiceTotal" }, { $sum: "$invoices.amountReceived" }] },
          },
          unusedAmount: { $sum: "$invoices.amountExcess" },
        },
      },
    ]);

    if (!updatedVendor || updatedVendor.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Vendor not found after creation.",
      });
    }

    res.status(200).json({
      success: true,
      vendor: updatedVendor[0],
    });
  } catch (error) {
    console.error("Error creating vendor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create vendor.",
    });
  }
});

module.exports.getVendor = expressAsyncHandler(async (req, res) => {
  const vendor = await Vendor.findById(req.params.id);
  if (!vendor) {
    res.status(403).json({
      success: false,
      massege: "vendor not found",
    });
  }
  res.status(200).json({
    success: true,
    vendor,
  });
});

// To get the vendor by email OR phone for taskmanager

module.exports.getVendorForTaskManager = expressAsyncHandler(
  async (req, res) => {
    const email = req.body.email;
    const phone = req.body.phone;

    const vendor = await Vendor.find({
      $or: [{ email: email }, { phone: phone }],
    });
    if (!vendor) {
      res.status(403).json({
        success: false,
        massege: "vendor not found",
      });
    }
    res.status(200).json({
      success: true,
      vendor,
    });
  }
);

module.exports.updatedVendor = expressAsyncHandler(async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "Unable to update vendor. Vendor not found.",
      });
    }

    const updatedVendor = await Vendor.aggregate([
      { $match: { _id: vendor._id } },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "vendorId",
          as: "invoices",
        },
      },
      {
        $project: {
          userId: 1,
          orgNumber: 1,
          companyName: 1,
          companyDiplayName: 1,
          currency: 1,
          email: 1,
          vendorType: 1,
          firstName: 1,
          lastName: 1,
          openingBalance: 1,
          pan: 1,
          paymentTerm: 1,
          phone: 1,
          website: 1,
          shippingAddress: 1,
          billingAddress: 1,

          receivableAmount: {
            $sum: { $subtract: [{ $sum: "$invoices.invoiceTotal" }, { $sum: "$invoices.amountReceived" }] },
          },
          unusedAmount: { $sum: "$invoices.amountExcess" },
        },
      },
    ]);

    if (!updatedVendor || updatedVendor.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Vendor not found after update.",
      });
    }

    res.status(200).json({
      success: true,
      vendor: updatedVendor[0],
    });
  } catch (error) {
    console.error("Error updating vendor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update vendor.",
    });
  }
});

module.exports.deleteVendor = expressAsyncHandler(async (req, res, next) => {
  const vendor = await Vendor.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

const { ObjectId } = require("mongoose").Types;

module.exports.getAllVendorWithReport = expressAsyncHandler(
  async (req, res) => {
    const vendors = await Vendor.aggregate([
      { $match: { orgNumber: req.orgNumber } },
      {
        $lookup: {
          from: "invoices",
          localField: "_id",
          foreignField: "vendorId",
          as: "invoices",
        },
      },
      {
        $project: {
          userId: 1,
          orgNumber: 1,
          companyName: 1,
          companyDiplayName: 1,
          currency: 1,
          email: 1,
          vendorType: 1,
          firstName: 1,
          lastName: 1,
          openingBalance: 1,
          pan: 1,
          paymentTerm: 1,
          phone: 1,
          website: 1,
          shippingAddress: 1,
          billingAddress: 1,

          receivableAmount: {
            $sum: { $subtract: [{ $sum: "$invoices.invoiceTotal" }, { $sum: "$invoices.amountReceived" }] },
          },
          unusedAmount: { $sum: "$invoices.amountExcess" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      vendors,
    });
  }
);

module.exports.getAllVendor = expressAsyncHandler(async (req, res, next) => {
  const vendors = await Vendor.find({ orgNumber: req.orgNumber });

  res.status(200).json({
    success: true,
    vendors,
  });
});




