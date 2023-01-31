const express= require("express");
const event = express();
event.get("/",(res,req)=>{
    res.end("hello welcome to my website, i hope you enjoy")
});
event.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
event.listen(2222,()=>{console.log("hello iam listening")})