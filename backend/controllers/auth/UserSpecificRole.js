const asyncHandler = require("express-async-handler");
const User = require("../../models/auth/userSchema");




module.exports.AllSpecificRolesGet = asyncHandler(async(req,res)=> {

  const specifyrole = req.params.id;

    const specificrole = await User.aggregate([
      {
        $lookup: {
          from: 'roleandpermissions',
          localField: 'roleId',
          foreignField: '_id',
          as: 'SpecificRole'
        }
      },
      
      {
        $match: {
          'SpecificRole.name': specifyrole
        }
      },
      {
        $project: {
          'name': 1,
          'email': 1,
          'orgNumber': 1,
          'orgId': 1,
          'phone': 1,
        

          
        }
      }
    ]);


    

    res.status(200).send(specificrole)
  
})