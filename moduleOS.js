/**
 * Created by sy on 2017/5/5.
 */
var os = require("os");

Function.prototype.log = function(){
    console.log(arguments[0]());
};

aaa(os.tmpdir);
aaa(os.endianness);
aaa(os.hostname);
aaa(os.type);
aaa(os.platform);
aaa(os.arch);
aaa(os.release);
aaa(os.uptime);
aaa(os.loadavg);
aaa(os.totalmem);
aaa(os.freemem);
aaa(os.cpus);
aaa(os.networkInterfaces);

function aaa(func){
    func.log(func);
}