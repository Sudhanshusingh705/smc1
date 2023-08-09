const mongoose = require("mongoose");

const VendorSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    orgNumber: {
      type: String,
      require: true,
    },
    companyName: {
      type: String,
    },
    companyDiplayName: {
      type: String,
    },
    currency: {
      type: String,
    },
    email: {
      type: String,
    },
    vendorType: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    pan: {
      type: String,
    },
    paymentTerm: {
      type: String,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    shippingAddress: mongoose.Schema({
      attention: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
      pincode: {
        type: String,
      },
      state: {
        type: String,
      },
      street: {
        type: String,
      },
    }),
    billingAddress: mongoose.Schema({
      attention: {
        type: String,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: String,
      },
      pincode: {
        type: String,
      },
      state: {
        type: String,
      },
      street: {
        type: String,
      },
    }),
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vendor", VendorSchema);
