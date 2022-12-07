

function hanin(n,begin, middle, end){
    if(n >0){
        hanin(n-1,begin, end, middle)
        obj.num++;
        console.log("移动"+n+"从" + begin +"到" + end);
        steps.push({
            "from":begin,
            "to":end
        })
        hanin(n-1,middle,begin,end);
    }

}

var obj = {
    num:0
}
var steps = [];
hanin(3,'a','b','c');
console.log(obj)

console.log(steps)




