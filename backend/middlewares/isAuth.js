const asyncHandler = require("express-async-handler");
const JwtService = require("../services/JwtService");
const User = require("../models/auth/userSchema");
const { AbilityBuilder, createMongoAbility } = require("@casl/ability");
const Role = require("../models/auth/roleSchema");

module.exports.isAuth = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token ?? req.headers.authorization?.split(" ")[1];

  if (!token) {
    return handleUnauthorized(res);
  }

  let decodedJwtPayload;
  try {
    decodedJwtPayload = JwtService.verify(token);
  } catch (error) {
    return handleUnauthorized(res);
  }

  const user = await User.findById(decodedJwtPayload._id)
    .select("-password")
    .populate("roleId");

  if (!user) {
    return handleUnauthorized(res);
  }

  if (user.roleId.name === "superadmin") {
    req.findQuery = { orgNumber: req.orgNumber };
  } else {
    req.findQuery = { branchId: req.branchId };
  }

  req.profile = user;
  req.orgNumber = user.orgNumber;
  req.orgId = user.orgId;
  req.branchId = user.branchId;
  req.role = user

  const role = user.roleId;
  const checkAbilities = (inputRole) => {
    const { can, rules } = new AbilityBuilder();
    role.permissions.forEach((permission) => {
      const { actions, subject, conditions = {} } = permission;
      can(actions, subject, conditions);
    });
    return new createMongoAbility(rules);
  };

  req.ability = checkAbilities(role);

  next();
});

const handleUnauthorized = (res) => {
  res
    .status(401)
    .cookie("token", null, { expires: new Date(Date.now()) })
    .clearCookie("token")
    .json({ success: false, message: "You are not authorized" });
};
