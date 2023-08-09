const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const PurchaseOrderSchema = new Schema(
  {
    userid: {
      type: String,
      require: false,
    },
    orgNumber: {
      type: String,
      require: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: "Vendor",
    },
    purchaseOrderNumber: {
      type: String,
    },
    reference: {
      type: String,
    },
    purchaseOrderDate: {
      type: String,
    },
    purchaseOrderDueDate: {
      type: String,
    },
    purchaseOrderItems: {
      type: Array,
    },
    purchaseOrderTotal: {
      type: Number,
    },
    purchaseOrderSubtotal: {
      type: Number,
    },
    discountType: {
      type: String,
    },
    discount: {
      type: Number,
      default: 0
    },
    additionalTaxId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mastertax",
    },
    additionalTaxAmount: {
     type: Number,
    },
    taxId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mastertax",
    },
    taxAmount: {
      type: Number,
    },
    termsAndConditions: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PurchaseOrder", PurchaseOrderSchema);
