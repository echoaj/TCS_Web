
console.log("Hello World");
console.log("Hello World2");

// Variables
var num1 = 10;      // Old Way
let num2 = 20;      // New Way
const num3 = 30;    // New Way

console.log("num1: ", num1);
console.log("num2: ", num2);
console.log("num3: ", num3);

// Var vs Let
// 1) Hoisting (process of setting up memory space for variables & functions)
console.log(name1); // Undefined
var name1 = "Alex"
// console.log(name2); // Reference Error
let name2 = "Alex"

// 2) Redeclaration
var name1 = "John"
// let name2 = "John"

// 3) Scope
// var -> function body | let -> bracket block {}
if (10 > 5){
    var toggle1 = true;
    let toggle2 = true;
    console.log("Inside", toggle1);
    console.log("Inside", toggle2);
}

console.log("Outside", toggle1);
//console.log("Outside", toggle2);    // refernce error


// If statements == vs ===
if (10 == 10){
    console.log("yes 1");
}
if (10 === 10){
    console.log("yes 2");
}
if (10 == "10"){    // not strict 
    console.log("yes 3")
}
if (10 === "10"){   // strict
    console.log("yes 4")
}
