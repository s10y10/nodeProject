/**
 * Created by sy on 2017/3/15.
 */
var http = require("http");
var url = require("url");
var util = require("util");

var num = 0;

function start(route){
    function onRequest(request, response){
        var query = url.parse(request.url,true).query;
        route(query);

        response.setHeader("Access-Control-Allow-Origin","*");
        response.writeHead(200,{"Content-Type":"text/plain"});

        num++;
        var result = {};
        result.r = {"num":num};
        result.s = 0;
        response.write(JSON.stringify(result));
        response.end(util.inspect(url.parse(request.url,true)));
    }

    http.createServer(onRequest).listen(8888,'0.0.0.0');
    console.log("Server has started");
}

exports.start = start;