const express = require("express");
const {
  createRole,
  createPermission,
  getPermissions,
  deletePermission,
  updatePermission,
  getSubjects,
  getRoles,
  updateRole,
  createRoleAndPermission,
  getAllRoleAndPermission,
  updateRoleAndPermission,
  getRoleAndPermissionById,
  deleteRoleAndPermissionById,
} = require("../../controllers/auth/roleAndPermisssion");

const route = express.Router();

route.post("/role", createRole);
route.post("/permission", createPermission);
route.get("/permissions", getPermissions);
route.delete("/permission/:id", deletePermission);
route.patch("/permission/:id", updatePermission);
route.get("/roles", getRoles);
route.patch("/role/:id", updateRole);
route.get("/subjects", getSubjects);

//new One

route.post("/roleandpermission", createRoleAndPermission);
route.get("/rolesandpermissions", getAllRoleAndPermission);
route.get("/roleandpermission/:id", getRoleAndPermissionById);
route.patch("/roleandpermission/:id", updateRoleAndPermission);
route.delete("/roleandpermission/:id", deleteRoleAndPermissionById);


module.exports.rolesAndPermissionRoute = route;
