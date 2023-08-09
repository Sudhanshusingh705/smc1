const express = require("express")

const {
    createExpense,
    updateExpense,
    getExpense,
    deleteExpense,
    getAllExpenses,
} = require("../../controllers/accountant/ExpenseController");

const { isAuth } = require("../../middlewares/isAuth");

const route = express.Router();


route.post("/expense", isAuth, createExpense);
route.patch("/expense/:id", isAuth, updateExpense);
route.get("/expense/:id", isAuth, getExpense);
route.delete("/expense/:id", isAuth, deleteExpense);
route.get("/expenses", isAuth, getAllExpenses);



module.exports.expenseRoute = route;