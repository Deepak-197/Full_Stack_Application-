const jwt = require("jsonwebtoken");

function Authentication(req,res,next){
    const token = req.headers.authorization;
    jwt.verify(token,"socialpracticetoken",(err,decod)=>{
         if(err){
            res.send({"msg":"Please Login First","error":err})
         }
         else{
            req.body.userID = decod.userID
            next();
         }
    })
}



module.exports={
    Authentication
}

