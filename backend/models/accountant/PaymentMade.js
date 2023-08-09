const { default: mongoose } = require("mongoose");

const PaymentMadeSchema = mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },
    orgNumber: {
      type: Number,
      require: true,
    },
    paymentMade: {
      type: Number,
      require: true,
    },
    paymentDate: {
      type: String,
      require: true,
    },
    paymentNumber: {
      type: Number,
    },
    paymentMode: {
      type: String,
      require: true,
    },
    depositTo: {
      type: String,
      require: true,
    },
    amountUsed: {
      type: Number,
      require: true,
    },
    bills: {
      type: Array,
      require: true,
    },
    amountExcess: {
      type: Number,
      require: true,
      default: 0

    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PaymentMade", PaymentMadeSchema);
