
var a = 5;
let interval = setInterval(()=>{
    console.log(2222);
    a--;
    if(a===0){
        clearInterval(interval);
    }

},1000);


