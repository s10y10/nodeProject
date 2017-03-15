/**
 * Created by sy on 2017/3/15.
 */
function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log("Hello,"+name);
    };
}
module.exports = Hello;