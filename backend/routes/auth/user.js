
const express = require("express");
const { createUser,updatePassword } = require("../../controllers/auth/user");


const { isAuth } = require("../../middlewares/isAuth");
const userSchema = require("../../models/auth/userSchema");
const route = express.Router();

route.post("/user", isAuth,
  createUser
);

route.get("/users", isAuth, async (req, res) => {
  let userdata = await userSchema
    .find({ orgNumber: req.orgNumber })
    .select("-password");
  return res.status(200).send(userdata);
});

route.patch("/user/:updatepassword",isAuth,updatePassword)

module.exports.userRoute = route;
