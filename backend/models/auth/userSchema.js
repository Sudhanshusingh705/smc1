const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      index: true,
      lowercase: true,
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
    branchId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref:"Branch",
      require: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoleAndPermission",
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    emailverificationToken: {
      type: String,
      require: true,
    },
    emailverificationTokenExpires: {
      type: String,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
    },
    passwordHistory: [{
      password: {
        type: String,
        required: true
      },
      changedAt: {
        type: Date,
        required: true
      }
    }]
  
  },
  {
    timestamps: true,
  }
);

userSchema.methods.authenticate = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

userSchema.pre("save", function (next) {
  if (this.isModified("email")) {
    this.email = this.email.toLowerCase();
  }
  next();
});

//TODO: Call Kar Lena Rakesh Ko Pahle Phir Delete Karna
userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);

module.exports = User;