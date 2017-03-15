/**
 * Created by sy on 2017/2/22.
 */
var events = require("events");
var eventEmitter = new events.EventEmitter();

var connectHandler = function(){
    console.log("连接成功");
    eventEmitter.emit("data_received");
};

var dataReceivedHandler = function(){
    console.log("数据接收成功");
};

eventEmitter.on("connection",connectHandler);

eventEmitter.on("data_received",dataReceivedHandler);

eventEmitter.emit("connection",1);

console.log("程序执行完毕");