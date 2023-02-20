const express = require("express");
const postRoute = express.Router();
const {PostModel} = require("../model/post.model")

postRoute.get("/",async(req,res)=>{
    const userID = req.body.userID;
    try {
        const allPost = await PostModel.find({userID})
        res.send(allPost);
    } catch (err) {
        res.send({"msg":"error in fetching","error":err})
    }
})

postRoute.post("/create",async(req,res)=>{
    const post = req.body;
    try {
       let newPost = new PostModel(post);
       await newPost.save();
       res.send({"msg":"post successfully"})   
    } catch (err) {
        res.send({"msg":"error in post","error":err})
    } 
})

postRoute.patch("/update/:id",async(req,res)=>{
      const ID = req.params.id
      const payload = req.body;
      const userID = payload.userID;
      try {
        const findUser = await PostModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await PostModel.findByIdAndUpdate({_id:ID},payload);
            res.send({"msg":"updated successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in updating","error":err})
      }
})

postRoute.delete("/delete/:id",async(req,res)=>{
      const ID = req.params.id
      const userID = req.body.userID;
      try {
        const findUser = await PostModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await PostModel.findByIdAndDelete(ID);
            res.send({"msg":"delete successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in delete","error":err})
      }
})



module.exports={
    postRoute
}
