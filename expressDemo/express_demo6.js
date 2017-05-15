/**
 * Created by sy on 2017/5/10.
 */
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");

app.get("/",function(req,res){
    console.log("Cookies:",req.cookies);
    res.end("hello2");
});

app.listen(8888);