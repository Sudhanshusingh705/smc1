const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const BillSchema = new Schema(
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
    customerId: {
      type: Schema.Types.ObjectId,
    },
    billNumber: {
      type: String,
      required: true,
      unique: false,
    },
    orderNumber: {
      type: String,
      req: true,
    },
    billDate: {
      type: String,
      req: true,
    },
    billDueDate: {
      type: String,
      req: true,
    },
    billItems: {
      type: Array,
      req: true,
    },
    billTotal: {
      type: Number,
      req: true,
    },
    subtotal: {
      type: Number,
      req: true,
    },
    discountType: {
      type: String,
      req: true,
    },
    discount: {
      type: Number,
      req: false,
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
      req: true,
    },
    termsAndConditions: {
      type: String,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

BillSchema.virtual("dueDays").get(function () {
  const currentDate = new Date();
  const [year, month, day] = this.billDueDate.split("-").map(Number);
  const dueDate = new Date(year, month - 1, day); // Convert to Date object
  if (!currentDate || !dueDate || isNaN(dueDate)) {
    return null; // Return null if either date is missing or invalid
  }
  const timeDiff = dueDate.getTime() - currentDate.getTime();
  const diffInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffInDays;
});
BillSchema.virtual("amountDue").get(function () {
  const amountDue=  this.billTotal-this.amountReceived
  return amountDue;
});

BillSchema.set("toObject", { virtuals: true });
BillSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Bill", BillSchema);
