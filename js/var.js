'use strict';
// console.log(x);                // undefined (注意，不会抛出 ReferenceError)
// console.log('still going...'); // still going...
// var x = 1;
// console.log(x);                // 1
// console.log('still going...'); // still going...

function resolve(){
    console.log(222)
}
var  a = 10;
while (a > 0){
    a--;

    setTimeout(()=>{
        console.log(222)
    },500);
}