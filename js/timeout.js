async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}
asyncPrint("hello",50)
//指定50毫秒以后，输出"hello world"。
