const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  actions: [String],
  subject: { type: String, default: "all" },
  condition: { type: mongoose.Schema.Types.Mixed },
  orgNumber: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
