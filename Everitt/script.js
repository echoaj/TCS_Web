

// for loop
for (let i = 0; i <10; i++) {
    console.log(i)
    
}

// for of loop
cars = ["camery", "F-15", "carola", "v40"]
for (const item of cars) {
    console.log(item)
}

// for in loop
people = {"alex":26, "jake":20, "ryan":15}
for (const key in people) {
    console.log(key, people[key])
}



// for each loop
cars.forEach(element => {
    console.log(element);
});


// while loop


// do while loop

// ***************** functions ***************

// function
function isEven1(num) {
    return num % 2 == 0;
}
console.log(isEven1(10));

// function expression
let isEven2 = function(num) {
    return num % 2 == 0;
}
console.log(isEven2(11));

// arrow function
let isEven3 = (num) => { return num % 2 == 0; }
console.log(isEven3(40))

// arrow function with implicit return
let isEven4 = num => { num % 2 == 0; }
console.log(isEven4(12))