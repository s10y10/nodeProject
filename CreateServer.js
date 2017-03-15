/**
 * Created by sy on 2017/2/13.
 */
var http = require("http");

function onRequest(requset,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello World");
    response.end();
    console.log(requset,response);
}
http.createServer(onRequest).listen(8888);
console.log('Server running at http://127.0.0.1:8888');