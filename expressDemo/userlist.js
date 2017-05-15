/**
 * Created by sy on 2017/5/10.
 */
var express = require("express");
var app = express();
var fs = require("fs");

app.get("/getUserList",function(req,res){
    fs.readFile(__dirname + "/" + "userdata.json","utf8",function(err,data)
    {
        console.log(data);
        res.end(data);
    });
});

app.get("/delUser/:id",function(req,res){
    fs.readFile(__dirname + "/" + "userdata.json", "utf8",function(err,data){
        
    });
});