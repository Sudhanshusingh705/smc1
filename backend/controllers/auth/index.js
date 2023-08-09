const asyncHandler = require("express-async-handler");
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
const User = require("../../models/auth/userSchema");

const VerificationToken = require("../../models/auth/VerificationSchema")

const Organisation = require("../../models/organisation/OrganisationSchema");
const JwtService = require("../../services/JwtService");
const Joi = require("joi");
const crypto = require("crypto");
const Role = require("../../models/auth/roleSchema");
const Permission = require("../../models/auth/permissionSchema");
const RoleAndPermission = require("../../models/auth/roleAndPermissionSchema");
const { default: mongoose } = require("mongoose");

const cookieOptions = {
  maxAge: 172800000,
};


const storeVerificationToken = async (uniqueIdentifier, verificationToken,email,expirationDate) => {

  const verificationTokenUpdate = await VerificationToken.findOne({ email: email });

  if (verificationTokenUpdate) {
    verificationTokenUpdate.uniqueIdentifier = uniqueIdentifier;
    verificationTokenUpdate.token = verificationToken;
    verificationTokenUpdate.expirationDate = expirationDate;
  
    await verificationTokenUpdate.save();
  } else {
    const verificationTokenObj = new VerificationToken({
      uniqueIdentifier: uniqueIdentifier,
      token: verificationToken,
      email: email,
      expirationDate: expirationDate,
    });
  
    await verificationTokenObj.save();
  }


};

const environment = process.env.NODE_ENV === 'Staging'
const url = environment ? 'http://localhost:5173/' : process.env.LIVE_FRONTEND_URL;



module.exports.signUp = asyncHandler(async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      orgName: Joi.string().required(),
      phone: Joi.number().required(),
    });

    const { error, value: { name, email, password, orgName, phone } = {} } =
      schema.validate(req.body);

    if (error) {
      return res.status(401).json({ success: false, message: error.message });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const orgNumber = await generateOrganisationNumber();
    const hashedPassword = await bcrypt.hash(password, 10);

    const roleData = {
      name: "superadmin",
      orgNumber,
      level: 0,
      permissions: [
        {
          actions: ["manage"],
          subject: "all",
        },
      ],
    };

    const role = new RoleAndPermission(roleData);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      orgNumber,
      phone,
      roleId: role._id,
    });

    const newOrganisation = new Organisation({ name: orgName, orgNumber });

    newUser.orgId = newOrganisation._id;
    role.createdBy = newUser._id;
    newOrganisation.createdBy = newUser._id;

    await Promise.all([newUser.save(), newOrganisation.save(), role.save()]);

    const token = await JwtService.sign({
      _id: newUser._id,
      role: newUser.role,
      email: newUser.email,
      orgNumber,
    });

    res
      .status(200)
      .cookie("token", token, cookieOptions)
      .json({
        success: true,
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          orgNumber: newUser.orgNumber,
          phone: newUser.phone,
          roleId: newUser.roleId,
        },
      });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, message: "Something went wrong" });
  }
});

module.exports.login = asyncHandler(async (req, res) => {
  
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error, value: { email, password } = {} } = schema.validate(req.body);

  if (error) {
    return res.status(401).json({ success: false, message: error.message });
  }

  const user = await User.findOne({ email }).populate("roleId");

  if (!user || !(await user.authenticate(password))) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }

  const { password: userPassword, ...userWithoutPassword } = user.toObject();
  const token = JwtService.sign({
    _id: user._id,
    roleId: user.role,
    email: user.email,
    orgNumber: user.orgNumber,
  });

  res.cookie("token", token, cookieOptions).json({
    success: true,
    profile: userWithoutPassword,
  });
});

module.exports.forgetPassword = asyncHandler(async (req, res) => {


  try {
    const users = await User.aggregate([
      {
        $match: {
          email: {
            $regex: req.body.email,
            $options: 'i'
          }
        }
      },
      {
        $lookup: {
          from: 'smtps',
          localField: 'orgNumber',
          foreignField: 'orgNumber',
          as: 'smtp'
        }
      }
    ]).exec();

if (users.length > 0) {
  const user = users[0];
  if (user.smtp.length > 0) {
    const smtpConfig = user.smtp[0];

    const verificationToken = crypto.randomBytes(20).toString('hex');
    const expirationDate = Date.now() + 24 * 60 * 60 * 1000;

    await User.updateOne(
      { _id: user._id },
      {
        $set: {
          emailverificationToken: verificationToken,
          emailverificationTokenExpires: expirationDate,
        },
      }
    );

    console.log(smtpConfig,183)

    const transporter = nodemailer.createTransport({host:smtpConfig.server,port: smtpConfig.port,secure: false,auth: {
      user: smtpConfig.userName,
      pass: smtpConfig.password
    },
    debug: true,
    logger: true
  });

   
  const verifytoken = verificationToken;
  const hash = crypto.createHash('sha256').update(verifytoken).digest('hex');
  const uniqueIdentifier = hash;
  
  storeVerificationToken(uniqueIdentifier, verificationToken,user.email,expirationDate);

    const verificationLink = `${url}Forget_Password/${uniqueIdentifier}`;

    const mailOptions = {
      from: smtpConfig.emailFrom,
      to: user.email,
      subject: 'Email Verification',
      text: `Please click the following link to verify your email: ${verificationLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Verification email sent' });
      }
    });

  }
  else {

  res.status(404).json({msg:'No SMTP configuration found for the user'});

  }

}
else{

  res.status(404).json({msg:'User Email Not Exists'});
}


  }
  catch(error) {
    console.log(error,210)
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

module.exports.forgetpasswordchange = asyncHandler(async (req, res) => {

  const { verify } = req.params;
console.log(verify,244)
  try {
    const tokenverify = await VerificationToken.findOne({
      uniqueIdentifier: verify,
      expirationDate: { $gt: Date.now() },
    });

    if (tokenverify) {
      res.status(200).send(tokenverify.email);
    } else {
      res.status(404).json({ message: 'Unverified Your Email' }); 
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

module.exports.completeverifyandchangepassword= asyncHandler(async (req, res) => {


console.log(req.body,274)

const schema = Joi.object({
  // _id: Joi.any().strip(),
  // old_password: Joi.string().required(),
  new_password: Joi.string().min(10).required(),
  confirm_password: Joi.string().valid(Joi.ref('new_password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
});

const { error, value: {  new_password, confirm_password } = {} } = schema.validate(req.body.senddata);

if (error) {
  res.status(401).json({ success: false, message: error.message });
} else {
  const user = await User.findOne({email: req.body.verifydata});

console.log(user,292)

  for (const passwordEntry of user.passwordHistory || []) {
    const isPasswordUsedPreviously = await bcrypt.compare(new_password, passwordEntry.password);
    if (isPasswordUsedPreviously) {
      res.status(401).json({ success: false, message: "You cannot reuse a previous password" });
      return;
    }
  }

  const hashedPassword = await bcrypt.hash(new_password, 10);
  user.password = hashedPassword;
  user.emailverificationTokenExpires = null;
  user.emailverificationToken = null;

  await VerificationToken.deleteOne({ email: user.email });

  if (!user.passwordHistory) {
    user.passwordHistory = [];
  }
  

  user.passwordHistory.push({
    password: hashedPassword,
    changedAt: new Date(),
    
  });

  await user.save();

  res.status(200).json({ success: true, message: "Password updated successfully" });
}


});

module.exports.logout = asyncHandler(async (req, res) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .clearCookie("token")
    .status(200)
    .json({
      success: true,
      message: "Logged Out",
    });
});

module.exports.getProfile = asyncHandler(async (req, res) => {
  const { profile } = req;
  const user = await User.findById(profile._id)
    .select("-password")
    .populate("roleId")
    .populate("createdBy");
  res.status(200).json({
    success: true,
    profile: user,
  });
});

async function generateOrganisationNumber() {
  const result = await Organisation.findOneAndUpdate(
    {},
    { $inc: { orgNumber: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
  const nextNumber = String(result.orgNumber).padStart(4, "0");
  return nextNumber;
}










