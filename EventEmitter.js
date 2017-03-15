/**
 * Created by sy on 2017/3/14.
 */
var events = require("events");
var eventsEmitter = new events.EventEmitter();

var listener1 = function(){
    console.log("监听器1执行");
};

var listener2 = function(){
    console.log("监听器2执行");
};

eventsEmitter.once("connection",listener1);
eventsEmitter.once("connection",listener2);

var listenrsCount1 = events.EventEmitter.listenerCount(eventsEmitter,"connection");
console.log("监听器数量："+listenrsCount1);

eventsEmitter.emit("connection");

eventsEmitter.removeListener("connection",listener1);
console.log("删除了监听器1");

var listenrsCount2 = events.EventEmitter.listenerCount(eventsEmitter,"connection");
console.log("监听器数量："+listenrsCount2);

eventsEmitter.emit("connection");

console.log("执行完毕");