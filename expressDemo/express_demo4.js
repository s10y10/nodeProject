/**
 * Created by sy on 2017/5/9.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(urlencodedParser);

app.get("/postget.html",function(req,res){
    console.log(__filename);
    res.sendFile(__dirname+"/postget.html");
});

app.post("/process_get",function(req,res){

    var response = {
        firstName:req.body.first_name,
        lastName:req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("host:",host,"port:",port);
});