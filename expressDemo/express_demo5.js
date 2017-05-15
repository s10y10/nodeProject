/**
 * Created by sy on 2017/5/9.
 */
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:"/tmp"}).array("image"));

app.get("/fileupload.html",function(req,res){
    res.sendFile(__dirname + "/fileupload.html");
});

app.post("/file_upload",function(req,res){
    console.log(req.files[0]);
    //todo
    var fileItem = req.files[0];
    var fileOriginalName = __dirname + "/" + fileItem.originalname;
    fs.readFile(fileItem.path,function(err,data){
        fs.writeFile(fileOriginalName,data,function(err){
            if(err){
                console.log(err);
            }else{
                response = {
                    message:"File uploaded successfully",
                    filename:fileOriginalName
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    });
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("host:",host,"port:",port);
})

