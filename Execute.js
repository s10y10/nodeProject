/**
 * Created by sy on 2017/3/15.
 */
function execute(func,value){
    func(value);
}

function say(value){
    console.log(value);
}

execute(say,"hello");