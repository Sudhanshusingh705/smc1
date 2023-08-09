const express = require("express");
const {
  getOrganisation,
  uploadOrganisationProfileImg,
  updateOrganisation,
  getOrganisationProfileImg,
  deleteOrganisationProfileImg,
} = require("../../controllers/organisation/organisation");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const route = express.Router();

route.get("/organisation", getOrganisation);
route.get("/organisationProfileImage",getOrganisationProfileImg );
route.patch("/organisation", updateOrganisation);
route.patch(
  "/uploadOrganisationProfileImg",
  upload.single("file"),
  uploadOrganisationProfileImg
);

module.exports.organisationRoute = route;
