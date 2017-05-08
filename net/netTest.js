/**
 * Created by sy on 2017/5/8.
 */
var net = require("net");
var server = net.createServer(create);

function create(connection){
    console.log("client connected");
    connection.on("end",function(){
        console.log("客户端关闭连接");
    });
    connection.write("Hello World"+JSON.stringify(server.address()));
    connection.pipe(connection);
}

server.listen(8888,function(){
    console.log("server is listening");
});