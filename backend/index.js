const express = require("express");
const {connection} = require("./main")
const {userRoute} = require("./route/user.route")
const {postRoute} = require("./route/post.route")
const {Authentication} = require("./middlewares/auth.middleware")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors());

app.use("/users",userRoute);
app.use(Authentication);
app.use("/posts",postRoute);

app.get("/",(req,res)=>{
    res.send("this is homepage")
})

app.listen(8080,async()=>{
    try {
        await connection
        console.log("database connected");
        console.log("server running");
    } catch (err) {
        console.log(err);
    }
})