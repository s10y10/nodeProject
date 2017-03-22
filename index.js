/**
 * Created by sy on 2017/3/15.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);