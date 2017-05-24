/**
 * Created by sy on 2017/5/10.
 */
var express = require("express");
var app = express();
var fs = require("fs");

var user = {
    "name":"user4",
    "pwd":"pwd4",
    "id":4
};

app.get("/getUserList",function(req,res){
    fs.readFile(__dirname + "/" + "userdata.json","utf8",function(err,data)
    {
        res.end(data);
    });
});

app.get("/addUser",function(req,res){
   fs.readFile(__dirname + "/" + "userdata.json","utf8",function(err,data)
   {
      var obj = JSON.parse(data);
       console.log(obj);
       obj["user4"] = user;
       res.end(JSON.stringify(obj));
   });
});

app.get("/delUser/:id   ",function(req,res){
    fs.readFile(__dirname + "/" + "userdata.json", "utf8",function(err,data){
        var obj = JSON.parse(data);
        console.log(req.params);
        delete obj["user"+req.params.id];
        res.end(JSON.stringify(obj));
    });
});
app.listen(8888);