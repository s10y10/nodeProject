/**
 * Created by sy on 2017/5/8.
 */
var express = require("express");
var app = express();

app.get('/',function(req,res){
    //console.log(req.app);
    console.log(req.baseUrl);
    console.log(req.body,req.cookies);
    console.log(req.fresh,req.stale);
    console.log(req.hostname,req.ip);
    console.log(req.originalUrl);
    console.log(req.params);
    console.log(req.path);
    console.log(req.protocol);
    console.log(req.query);
    console.log(req.route);
    console.log(req.subdomains);
    console.log(req.accepts());
    console.log(req.acceptsCharsets(),req.acceptsEncodings(),req.acceptsLanguages());
    //console.log(req.get());
    //console.log(req.is());
    res.send('Hello World');
});

var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s",host,port);
})