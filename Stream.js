/**
 * Created by sy on 2017/3/14.
 */
var fs = require("fs");
var zlib = require("zlib");
var str = "";
var readStream = fs.createReadStream("input.txt");
readStream.on("data",function(chunk){
    str += chunk;
});
readStream.on("end",function(){
    console.log(str);
    write();
});
readStream.on("error",function(err){
    console.log(err);
});

function write(){
    var writeStream = fs.createWriteStream("output.txt");
    var msg = str + "2";
    writeStream.write(msg,"utf8");
    writeStream.end();

    writeStream.on("finish",function(){
        console.log("写入完成");
        pipeRW();
    });

    writeStream.on("error",function(err){
        console.log(err);
    });
}

function pipeRW(){
    var r = fs.createReadStream("output.txt");
    var w = fs.createWriteStream("input.txt");
    r.pipe(w);
    console.log("pipe完成");
}
