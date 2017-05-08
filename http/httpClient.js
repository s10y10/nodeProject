/**
 * Created by sy on 2017/5/8.
 */
var http = require("http");

var p = {
    host:'10.0.9.133',
    port:8888,
    path:'/index.html'
}

function callback(res){
    var result = "";
    res.on("data",function(data){
        result += data;
    });
    res.on("end",function(){
        console.log(result);
    })
}

http.request(p,callback).end();
