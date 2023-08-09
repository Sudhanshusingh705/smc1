const mongoose = require("mongoose");
const crypto = require("crypto");


const VerificationSchema = mongoose.Schema(
  {
    uniqueIdentifier: {
      type: String,
      require: true,
    },
    token: {
      type: String,
      require: true,
    },
    expirationDate:{
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  
  
  },
  {
    timestamps: true,
  }
);




module.exports =  mongoose.model("Verification", VerificationSchema);