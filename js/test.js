function sayHi(name) {
    return `hel0 ${name}`;
}

console.log(sayHi("222"))


let numbers = [-1, -2, 1, 2, 3];

let numbers1 = numbers.filter((e)=>{
    return e > 0;
}).map(e=>{
    return 1+e
})
console.log(111)
console.log(numbers1)


var rows = [[2, 3, 5], [1, 2, 4], [8, 5, 5]]
var matrixElements = rows.reduce( (prev, current) => prev.concat(current));
console.log(222)
console.log(matrixElements);

var rows2 = [2, 3, 5 ,1, 2, 4 , 8, 5, 5]
console.log(rows2);

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
let filter = Object.entries(prices).filter(e=>{
    return e[1] > 1
});
console.log(filter)


var bank = {
    p1:1,
    p2:2

}
console.log(bank.p3 === undefined ? 1 : 2)

function sayhello(){
    return function (){
        console.log(3333)
    }
}
sayhello();

var a = null;

console.log(a??"22");


function makeFunc() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName()
}

makeFunc();

