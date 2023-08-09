const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");
const Permission = require("../../models/auth/permissionSchema");
const Role = require("../../models/auth/roleSchema");
const Joi = require("joi");
const { default: mongoose } = require("mongoose");
const RoleAndPermission = require("../../models/auth/roleAndPermissionSchema");

module.exports.createPermission = expressAsyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    actions: Joi.array().required(),
    subject: Joi.string().required(),
    condition: Joi.string(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const permission = await Permission.create({
      ...value,
      createdBy: req.profile._id,
      orgNumber: req.orgNumber,
    });
    res.status(201).json({ success: true, permission });
  }
});

module.exports.getPermissions = expressAsyncHandler(async (req, res) => {
  const permissions = await Permission.find({ orgNumber: req.orgNumber });

  res.status(201).json({ success: true, permissions });
});

module.exports.deletePermission = expressAsyncHandler(async (req, res) => {
  const permission = await Permission.findByIdAndDelete(req.params.id);
  res.status(201).json({ success: true, permission });
});

module.exports.updatePermission = expressAsyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    actions: Joi.array().required(),
    subject: Joi.string().required(),
    condition: Joi.string(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const permission = await Permission.findByIdAndUpdate(req.params.id, {
      ...value,
      createdBy: req.profile._id,
      orgNumber: req.orgNumber,
    });
    res.status(201).json({ success: true, permission });
  }
});

module.exports.createRole = expressAsyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const role = await Role.create({ ...value, orgNumber: req.orgNumber });
    res.status(201).json({ success: true, role });
  }
});

module.exports.getRoles = expressAsyncHandler(async (req, res) => {
  const roles = await Role.find({ orgNumber: req.orgNumber });
  res.status(201).json({ success: true, roles });
});

module.exports.updateRole = expressAsyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array(),
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const role = await Role.findByIdAndUpdate(req.params.id, { ...value });
    res.status(201).json({ success: true, role });
  }
});

module.exports.getSubjects = expressAsyncHandler(async (req, res) => {
  const subjects = await mongoose.connection.db
    .listCollections()
    .toArray((err, collections) => {
      if (err) {
        console.log(err);
      } else {
        const collectionNames = collections.map(
          (collection) => collection.name
        );
        res.status(201).json({ success: true, subjects: collectionNames });
      }
    });
});

module.exports.createRoleAndPermission = expressAsyncHandler(
  async (req, res) => {
    const rolefind = await RoleAndPermission.findOne({
      name: req.body.name,
      orgNumber: req.orgNumber,
    });

    if (rolefind) {
      return res.status(201).json({
        success: false,
        message: "role already exists please change role name",
      });
    }
    const roleAndPermission = await RoleAndPermission.create({
      ...req.body,
      orgNumber: req.orgNumber,
      createdBy: req.profile._id,
    });
    res.status(201).json({
      success: true,
      message: "Success! The role has been created with the permissions",
    });
  }
);
module.exports.getAllRoleAndPermission = expressAsyncHandler(
  async (req, res) => {
    const roleAndPermission = await RoleAndPermission.find({
      orgNumber: req.orgNumber,
    });
    res.status(201).json({ success: true, roleAndPermission });
  }
);

module.exports.getRoleAndPermissionById = expressAsyncHandler(
  async (req, res) => {
    const roleAndPermission = await RoleAndPermission.findById(req.params.id);
    res.status(201).json({ success: true, roleAndPermission });
  }
);

module.exports.deleteRoleAndPermissionById = expressAsyncHandler(
  async (req, res) => {
    const roleAndPermission = await RoleAndPermission.findByIdAndDelete(
      req.params.id
    );
    res.status(201).json({
      success: true,
      message: "Role and Permission successfully deleted",
      roleAndPermission,
    });
  }
);

module.exports.updateRoleAndPermission = expressAsyncHandler(
  async (req, res) => {
    const roleAndPermission = await RoleAndPermission.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res
      .status(201)
      .json({ success: true, message: "Permission updated successsully" });
  }
);
