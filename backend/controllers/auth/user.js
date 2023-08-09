const asyncHandler = require("express-async-handler");
const Joi = require("joi");
const User = require("../../models/auth/userSchema");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

module.exports.createUser = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.number().required(),
    roleId: Joi.string().required(),
  });

  const { error, value: { name, email, password, phone, roleId } = {} } =
    schema.validate(req.body);

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const existingUser = await User.findOne({
      email,
      orgNumber: req.orgNumber,
    });
    if (existingUser) {
      res.status(400).json({ success: false, message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      roleId,
      password: hashedPassword,
      orgNumber: req.orgNumber,
      createdBy: req.profile._id,
      phone,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      user: newUser,
    });
  }
});





module.exports.updatePassword = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    _id: Joi.any().strip(),
    old_password: Joi.string().required(),
    new_password: Joi.string().min(10).required(),
    confirm_password: Joi.string().valid(Joi.ref('new_password')).required().messages({
      'any.only': 'Passwords do not match',
    }),
  });

  const { error, value: { old_password, new_password, confirm_password } = {} } = schema.validate(req.body, { stripUnknown: true });

  if (error) {
    res.status(401).json({ success: false, message: error.message });
  } else {
    const user = await User.findById(req.params.updatepassword);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    const isMatch = await bcrypt.compare(old_password, user.password);

    if (!isMatch) {
      res.status(401).json({ success: false, message: "Old password is incorrect" });
      return;
    }

    for (const passwordEntry of user.passwordHistory || []) {
      const isPasswordUsedPreviously = await bcrypt.compare(new_password, passwordEntry.password);
      if (isPasswordUsedPreviously) {
        res.status(401).json({ success: false, message: "You cannot reuse a previous password" });
        return;
      }
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);
    user.password = hashedPassword;

    
  if (!user.passwordHistory) {
    user.passwordHistory = [];
  }
    user.passwordHistory.push({
      password: hashedPassword,
      changedAt: new Date()
    });

    await user.save();

    res.status(200).json({ success: true, message: "Password updated successfully" });
  }
});


