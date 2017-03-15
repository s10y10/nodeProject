/**
 * Created by sy on 2017/2/13.
 */
var fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(1,data.toString());
console.log(1);

fs.readFile("input.txt",function(err,data){
    console.log(2,data.toString());
});
console.log(2);