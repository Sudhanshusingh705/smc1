const express = require("express");
const rateLimit = require('express-rate-limit');

const { signUp, login,forgetPassword,forgetpasswordchange,completeverifyandchangepassword, getProfile, logout } = require("../../controllers/auth");
const { AllSpecificRolesGet } = require("../../controllers/auth/UserSpecificRole");

const { isAuth } = require("../../middlewares/isAuth");
const route = express.Router();

const getRateLimitKey = (req) => {
    const email = req.body.email;
    return email;
  };
  

  const loginLimiter = rateLimit({
    windowMs: 3 * 60 * 1000, 
    max: 5,
    keyGenerator: getRateLimitKey,
    message: 'Too many failed login attempts. Please try again after 3 minutes.',
  });

route.post("/login",loginLimiter, login);

route.post("/signup", signUp);

route.post("/forgetpassword",forgetPassword);

route.get("/emailverifypasswordchange/:verify",forgetpasswordchange);

route.post("/forgetpasswordchange",completeverifyandchangepassword)

route.get("/logout",logout);

route.get("/profile", isAuth, getProfile);

route.get("/User/getUserSpecificRole/:id",AllSpecificRolesGet)

module.exports.authRoute = route;
