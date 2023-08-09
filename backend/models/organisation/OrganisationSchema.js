const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema(
  {
    orgNumber: {
      type: mongoose.Schema.Types.Mixed,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    profileImg: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: true,
    },
    industry: {
      type: String,
    },
    phonenumber: {
      type: Number,
    },
    bussinesslocation: {
      type: String,
    },
    address: mongoose.Schema({
      street: String,
      city: String,
      state: String,
      pincode: String,
      phonenumber: Number,
      fax: String,
      website: String,
    }),
    fiscalYear: {
      type: String,
    },
    reportBasis: {
      type: String,
      enums: ["Cash", "Accural"],
    },
    timezone: {
      type: String,
    },
    dateFormat: {
      type: String,
    },
    language: {
      type: String,
    },
    company: {
      type: String,
    },
    taxId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Organisation", organisationSchema);
