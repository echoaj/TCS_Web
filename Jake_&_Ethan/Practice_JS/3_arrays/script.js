

let cars = ["Camery", "Tundra", "Jeep", "Escalades"];

console.log(cars);
cars.push("Viper");     // add item at end of list
cars.pop()              // delete item at end of list
cars.splice(1, 0, "Lambo"); // insert item at second position
cars.shift()            // delete item at front of list
cars.unshift("Mozerati")// add item to the front of list
console.log(cars);


let people = {"Alex":26, "Jake":11, "Ethan":11}
console.log(people);
console.log(people["Jake"]);
console.log(people.Jake);