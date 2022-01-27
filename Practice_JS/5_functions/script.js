
// function
function isEven1(num) {
    return num % 2 === 0;
}
console.log(isEven1(10));

// function expression
const isEven2 = function (num) {
    return num % 2 === 0;
}
console.log(isEven2(10));

// arrow function
const isEven3 = (num) => { return num % 2 === 0;}
console.log(isEven3(10));

// arrow function no parentheses (only works with 1 parameter)
const isEven4 = num => { return num % 2 === 0; }
console.log(isEven4(10));

// arrow function implicit return
const isEven5 = num => ( num % 2 === 0 )
console.log(isEven5(10));

// arrow function implicit return no parenthese
const isEven6 = num => num % 2 === 0 
console.log(isEven6(10));

// Methods
const math = {
    add: (x, y) => x + y,
    sub: (x, y) => x - y,
    mul: (x, y) => x * y,
    div: (x, y) => x / y
};
console.log(math.sub(50, 7))

