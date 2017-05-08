/**
 * Created by sy on 2017/5/8.
 */
var net = require("net");
var client = net.connect({port:8888},function(){
    console.log("连接到服务器");
});
client.on("data",function(data){
    console.log(data.toString());
    client.end();
});
client.on("end",function(){
    console.log("断开与服务器的连接");
});

client.on("connect",function(data){
    console.log("成功建立socket连接",data);
});