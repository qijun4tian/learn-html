

function hanin(n,begin, middle, end, num){
    if(n >0){
        hanin(n-1,begin, end, middle,num)
        obj.num++;
        console.log("移动"+n+"从" + begin +"到" + end);
        hanin(n-1,middle,begin,end,num);
    }

}

var obj = {
    num:0
}
hanin(3,'a','b','c',obj);
console.log(obj)




