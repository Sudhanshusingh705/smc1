const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const VendorCreditSchema = new Schema(
  {
    userId: {
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
    creditNoteNumber: {
      type: String,
      required: false,
      unique: false,
    },
    orderNumber: {
      type: String,
      required: false,
    },
    creditDate: {
      type: String,
    },
    creditItems: {
      type: Array,
    },
    creditTotal: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    discountType: {
      type: String,
    },
    discount: {
      type: Number,
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
    bills: {
      type: Array,
      require: true,
    },
    creditUsed: {
      type: Number,
      default: 0,
    },
    termsAndConditions: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

VendorCreditSchema.virtual("creditBalance").get(function () {
  return this.vendorCreditTotal - this.creditUsed;
});

module.exports = mongoose.model("VendorCredit", VendorCreditSchema);
