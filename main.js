const calculate = require("./build/Release/calculate");
function calc() {
    let i;
        let x= 100.3324234234234, y = 200.213123123;

        for(i=0; i< 10000000; i++) {
            x+= y;
        }
        const total = x;
        return total;
}
console.time("c++");
console.log(calculate.calc());
console.timeEnd("c++");

console.time("node");
calc();
console.timeEnd("node");