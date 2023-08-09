const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    orgNumber: {
      type: String,
      require: true,
    },
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organisation",
    },
    phone: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.methods.authenticate = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("Admin", adminSchema);
