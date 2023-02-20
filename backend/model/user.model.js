const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {type :String,required:true},
    gender : {type :String,required:true},
    pass : {type :String,required:true},
    email : {type :String,required:true}
},{
    versionKey:false
})

const UserModel = mongoose.model("user",UserSchema);

module.exports ={
    UserModel
}

// Deepak SOni