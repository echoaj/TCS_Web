
console.log("Hello World");

// Variables

var num1 = 10;      // Old Way
let num2 = 20;      // New Way
const num3 = 30;    // New Way
console.log(num1, num2, num3);

// 1st Difference
// Var vs Let Hoisting (process of setting up memory space of variables & functions)
console.log(name1);
var name1 = "Alex";
// console.log(name2)
let name2 = "Josh";


// 2nd difference
// Redeclaration
var animal1 = "Cow";
let animal2 = "Rat";

var animal1 = "Cheeta";
// let animal2 = "Jaguar";

console.log(animal1);
console.log(animal2);


// 3rd difference
// Scope (The area of where something exists in programing)
// let -> brackets {} | var -> function body
if(10 > 5){
    var toggle1 = true;
    let toggle2 = true;
    console.log("Inside if statement: ", toggle1);
    console.log("Inside if statement: ", toggle2);
}

console.log("Outside if statement: ", toggle1);
// console.log("Outside if statement: ", toggle2); // reference error


// Equals operator:
// asignment(=)  comparison(==)  compirson(===)(strict) 

if(10 == 10){
    console.log("Yes 1");
}
if(10 === 10){
    console.log("Yes 2");
}
if(10 == "10"){
    console.log("Yes 3");
}
if(10 === "10"){
    console.log("Yes 4");
}
