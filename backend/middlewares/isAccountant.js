const expressAsyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");

module.exports.isAccountant = expressAsyncHandler(async (req, res, next) => {
    if (req.profile.role === "admin") {
        next();
    }

    if (req.profile.role === "user" && req.profile.type.includes("accountant")) {
        next();
    }
    else {
        res
            .status(401)
            .json({ success: false, message: "You are not authorized as an accountant." });
    }
});