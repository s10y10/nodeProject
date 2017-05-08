/**
 * Created by sy on 2017/5/8.
 */
var dns = require("dns");

dns.lookup("www.baidu.com",onlookup);

function onlookup(err,address, family){
    console.log("ip:",address);
    dns.reverse(address,function(err,hostnames){
        if(err){
            console.log(err.stack);
        }
        console.log("反向解析",address,":"+JSON.stringify(hostnames))

    })
}