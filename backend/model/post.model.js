const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title : {type :String,required:true},
    body : {type :String,required:true},
    device : {type :String,required:true},
    userID : String
},{
    versionKey:false
})

const PostModel = mongoose.model("post",PostSchema);

module.exports ={
    PostModel
}