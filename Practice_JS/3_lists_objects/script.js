
let car1 = "Toyota";
let car2 = "Volvo";
let car3 = "BMW";


const cars = ["Toyota", "Volvo", "BMW"];
cars[0] = "Ford";
console.log(cars);
console.log(cars.length);

cars.push("Subaru");
cars.pop();
cars.shift();
cars.unshift();

const names = new Array("Lisa", "Alice", "Amy");