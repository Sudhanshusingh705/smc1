const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../models/accountant/Expense");
const Organisation = require("../../models/organisation/OrganisationSchema");
const puppeteer = require("puppeteer");
const Handlebars = require("handlebars");
const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const Smtp = require("../../models/Admin/Master/smtp");




module.exports.createExpense = expressAsyncHandler(async (req, res, next) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      orgNumber: req.orgNumber,
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Failed to create expense. Customer not found.",
      });
    }

    res.status(200).json({
      success: true,
      expense,
    });
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create expense.",
    });
  }
});

module.exports.updateExpense = expressAsyncHandler(async (req, res, next) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!expense) {
    return res.status(403).json({
      success: false,
      message: "unable to update vendor",
    });
  }

  res.status(200).json({
    success: true,
    expense,
  });
});

module.exports.getExpense = expressAsyncHandler(async (req, res, next) => {
  const expense = await Expense.findById(req.params.id);
  res.status(200).json({
    success: true,
    expense,
  });
});

module.exports.deleteExpense = expressAsyncHandler(async (req, res, next) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
  });
});

module.exports.getAllExpenses = expressAsyncHandler(async (req, res, next) => {
  const expenses = await Expense.find({ orgNumber: req.orgNumber }).populate(
    "vendorId",
    "companyDiplayName"
  );

  res.status(200).json({
    success: true,
    expenses,
  });
});
