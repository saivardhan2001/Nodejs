const express = require('express');
const expressjs=express();
expressjs.get('/',function(req,res){
    res.send("hello world welcome")
})
expressjs.get('/alien',function(req,res){
    res.send("welcome back alien")
})
expressjs.get('/alien/:id',function(req,res){
    const id=req.params.id
    res.send("sai vardhan")
})
expressjs.listen(9000,function(req,res){
    console.log("hello world server is running....")
})