const mongoose = require("mongoose");

const roleAndPermissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  orgNumber: { type: String, required: true },
  level: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  permissions: [
    {
      actions: [
        {
          type: String,
          enum: ["create", "read", "update", "delete", "manage"],
        },
      ],
      subject: { type: String },
      condition: { type: mongoose.Schema.Types.Mixed },
    },
  ],
});

const RoleAndPermission = mongoose.model(
  "RoleAndPermission",
  roleAndPermissionSchema
);

module.exports = RoleAndPermission;
