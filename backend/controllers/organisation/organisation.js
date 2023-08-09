const Organisation = require("../../models/organisation/OrganisationSchema");
const expressAsyncHandler = require("express-async-handler");
const fs = require("fs");
const path = require("path");

module.exports.getOrganisation = expressAsyncHandler(async (req, res) => {
  console.log(req.orgNumber);
  const organisation = await Organisation.findOne({
    orgNumber: req.orgNumber,
  })
    .populate("address")
    .lean();

  if (!organisation) {
    res.status(403).json({
      success: false,
      massege: "organisation  not found",
    });
  } else {
    res.status(201).json({
      success: true,
      organisation,
    });
  }
});

module.exports.uploadOrganisationProfileImg = expressAsyncHandler(
  async (req, res) => {
    // const url = req.protocol + "://" + req.get("host");

    const organisation = await Organisation.findOneAndUpdate(
      { orgNumber: req.orgNumber },
      {
        profileImg: "Public/images/" + req.file.filename,
      }
    );

    if (organisation.profileImg) {
      const uploadsFolderPath = path.join(
        path.dirname(__dirname),
        "Public/images/",
        organisation.profileImg.split("images/")[1]
      );

      fs.unlink(uploadsFolderPath, (err) => {
        if (err) {
          console.error(`Failed to unlink file: ${uploadsFolderPath}`);
        }
      });
    }

    res.status(201).json({
      success: true,
    });
  }
);

module.exports.updateOrganisation = expressAsyncHandler(async (req, res) => {
  const organisation = await Organisation.findOneAndUpdate(
    { orgNumber: req.orgNumber },
    {
      ...req.body,
    }
  );

  if (!organisation) {
    res.status(403).json({
      success: false,
      massege: "Not able to update organisation",
    });
  }

  res.status(201).json({
    success: true,
    organisation,
  });
});

module.exports.getOrganisationProfileImg = expressAsyncHandler(
  async (req, res) => {
    const { profileImg } = await Organisation.findOne({
      orgNumber: req.orgNumber,
    })
      .select("profileImg")
      .lean();

    res.status(200).json({ success: true, profileImg });
  }
);

module.exports.deleteOrganisationProfileImg = expressAsyncHandler(
  async (req, res) => {
    const { profileImg } = await Organisation.findOneAndUpdate(
      { orgNumber: req.orgNumber },
      {
        profileImg: null,
      }
    );

    if (profileImg) {
      const uploadsFolderPath = path.join(
        path.dirname(__dirname),
        "uploads/",
        profileImg.split("uploads/")[1]
      );

      fs.unlink(uploadsFolderPath, (err) => {
        if (err) {
          console.error(`Failed to unlink file: ${uploadsFolderPath}`);
        }
      });
    }

    res.status(201).json({ success: true });
  }
);
