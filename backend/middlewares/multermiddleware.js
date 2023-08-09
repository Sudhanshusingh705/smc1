const multer=require("multer")

const {v4:uuidv4}=require("uuid")

const path=require("path")

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"Public/Uploads")
    },
    filename:(req,file,cb)=>{
      cb(null,`${uuidv4()}_${path.extname(file.originalname)}`)
    }
})

const filefilter=(req,file,cb)=>{
    const allowedFileTypes=["image/jpeg","image/jpg","image/png","image/webp","image/pdf"]
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const multermiddleware=multer({storage,filefilter})

module.exports=multermiddleware