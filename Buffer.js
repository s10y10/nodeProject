/**
 * Created by sy on 2017/3/14.
 */
var buf = new Buffer(256);
var len = buf.write("www.runoob.com");

console.log("len:",len);

var buf2 = new Buffer(26);

for(var i = 0;i<26;i++)
{
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'));
console.log(buf2.toString('ascii',0,10));
console.log(buf2.toString('utf8'));
console.log(buf2.toString(undefined,0,5));
