/**
 * Created by sy on 2017/5/9.
 */
var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hello Get");
    console.log("主页Get请求");
});

app.post("/",function(req,res){
    res.send("Hellow Post");
    console.log("主页Post请求");
});

app.get("/del_user",function(req,res){
    res.send("删除页面");
    console.log("用户删除get请求");
});

app.get("/list_user",function(req,res){
    res.send("用户列表");
    console.log("用户列表get请求");
});

app.get("/abcd",function(req,res){
    res.send("这个牛逼了，正则匹配");
    console.log("ab*cd正则匹配get请求");
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("host:"+host+"port:"+port);
});