/**
 * Created by sy on 2017/3/15.
 */
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));

console.log("文件压缩完成");