/**
 * Created by sy on 2017/5/9.
 */
var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.send("Hello demo3");
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("host:",host,"port:",port);
});
