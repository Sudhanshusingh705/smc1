const { authRoute } = require("./auth/auth");
const { userRoute } = require("./auth/user");

const express = require("express");
const { isAuth } = require("../middlewares/isAuth");


const { isAccountant } = require("../middlewares/isAccountant");

// const { vendorRoute } = require("./accountant/VendorRoute");
// const {expenseRoute} = require("./accountant/expenseRoute");
// const { billRoute} = require("./accountant/billRoute");
// const  {paymentMadeRoute} = require("./accountant/paymentMadeRoute");
// const {VendorCreditRoutes} = require("./accountant/VendorCreditRoute");
// const {purchaseOrderRoute} = require("./accountant/purchaseOrderRoute");

const { rolesAndPermissionRoute } = require("./auth/rolesAndPermission");


const { organisationRoute } = require("./organisation/organisation");
const { ForgotRoute } = require("./ForgotPassword/index");

const allRoutes = express.Router();



allRoutes.use("/auth", authRoute);
allRoutes.use(isAuth,userRoute);




allRoutes.use(rolesAndPermissionRoute);

// allRoutes.use(isAuth, vendorRoute);
// allRoutes.use(isAuth, expenseRoute);
// allRoutes.use(isAuth, billRoute);
// allRoutes.use(isAuth, paymentMadeRoute);
// allRoutes.use(isAuth, VendorCreditRoutes);
// allRoutes.use(isAuth, purchaseOrderRoute);

allRoutes.use("/", ForgotRoute);
// allRoutes.use("/ticket", isAuth, ticketRoute);



//---- Organisation------

allRoutes.use(isAuth, organisationRoute);

// allRoutes.use("/", hello);
allRoutes.use("/", ForgotRoute);


module.exports = allRoutes;
