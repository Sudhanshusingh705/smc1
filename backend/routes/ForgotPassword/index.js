
const {postforgot} =require("../../controllers/ForgotPassword/index")

const express  = require('express');

const route = express.Router();


route.post('/forgot',postforgot)



 

module.exports.ForgotRoute = route