/**
 * Created by sy on 2017/5/5.
 */
var fs = require("fs");
var buf = new Buffer(1024);

//fs.stat("input.txt",stat);
//function stat(err,stats){
//    console.log(stats);
//    console.log(stats.isFile());
//    console.log(stats.isDirectory());
//}
//
//fs.writeFile("output.txt","我是刚写的内容",writeFile);
//function writeFile(err){
//    console.log(err);
//
//    fs.readFile("output.txt",function(err,data){
//       console.log(err,data.toString());
//    });
//}

//fs.open("input.txt","r+",function(err,fd){
//    console.log(err,fd);
//    fs.read(fd,buf,0,buf.length,0,function(err2,by){
//        if(by > 0){
//            console.log(buf.slice(0,by).toString())
//        }
//        console.log(buf.toString());
//    });
//});

//fs.mkdir("./tmp/",function(err){
//    console.log(err);
//});

//fs.readdir("./",function(err,files){
//    for(var i=0;i<files.length;i++){
//        var a = files[i];
//        if(fs.statSync(a).isFile()){
//            console.log(a);
//        }
//    }
//});

fs.rmdir("./tmp",function(err){
    console.log(err);
});