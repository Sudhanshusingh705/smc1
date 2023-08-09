const mongoose = require("mongoose")

const UserModel=require("../../models/auth/userSchema")

const nodemailer=require("nodemailer")

const jwt=require("jsonwebtoken")




module.exports.postforgot = async (req, res) => {
   const {email}=req.body
   if(!email){
    res.send("Please enter the email").status(400)
   }
  try{
       const user=await UserModel.findOne({email})

       const jwt=jwt.sign({id:user._id})
       res.send(user)
    }
   
  catch (err) {
    console.log(err,37)
    return res.status(401).send(err)
  }
};















module.exports.updatebranch = async (req, res) => {
    const id=req.params.id
    try{
      const  newbranch=await branchModel.findByIdAndUpdate({"_id":id},{createdBy:req.profile._id,orgNumber:req.orgNumber,...req.body},{new:true})
      res.send(" new branch is updated")
    } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};




module.exports.deletebranch = async (req, res) => {
    const id=req.params.id
    try{
       const  newbranch=await branchModel.findByIdAndDelete({"_id":id})
       res.send(" new branch is deleted")
    } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};


