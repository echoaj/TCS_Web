
// function
function isEven1(num) {
    return num % 2 == 0;
}
console.log(isEven1(11));


// function expression
const isEven2 = function (num) {
    return num % 2 == 0;
};
console.log(isEven2(12));


// arrow function
const isEven3 = (num) => { return num % 2 == 0; };
console.log(isEven3(13));


// arrow function without paranthese - only works if you have 1 parameter
const isEven4 = num => { return num % 2 == 0; };
console.log(isEven4(14));


// arrow function with an implicit return
const isEven5 = num => num % 2 == 0;
console.log(isEven5(15));


// methods inside an object
const math = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    mul: (x, y) => x * y,
    div: (x, y) => x / y,
}

console.log(math.sub(9,4));
console.log(math.add(9,4));
console.log(math.mul(8,7));