/**
 * Created by sy on 2017/3/15.
 */
var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("request for:",pathname);

        route(pathname);

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World 2");
        response.end();
    }

    http.createServer(onRequest).listen(8888,'0.0.0.0');
    console.log("Server has started");
}

exports.start = start;