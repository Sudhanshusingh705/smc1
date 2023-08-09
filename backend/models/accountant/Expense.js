const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const ExpenseSchema = new Schema(
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
    customerId: {
      type: Schema.Types.ObjectId,
    },
    expenseNumber: {
      type: String,
      req: true,
    },
    reference: {
      type: String,
    },
    expenseDate: {
      type: String,
      req: true,
    },
    expenseAmount: {
      type: Number,
      req: true,
    },
    expenseAccount: {
      type: String,
      req: true,
    },
    expensePaidThrough: {
      type: String,
      req: true,
    },
    taxId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "mastertax",
    },
    taxAmount: {
      type: Number,
      req: false
    },
    termsAndConditions: {
      type: String,
      req: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
