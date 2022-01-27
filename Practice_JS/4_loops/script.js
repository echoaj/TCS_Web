// For loops
// 1) For loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 1) For of loop  -- Like Python for loop
const list = ["Dell", "HP", "Apple", "Microsoft", "Asus", "Lenovo"];
for (const item of list) {
    console.log(item);
}

// 2) For in loop  -- Loops though indecies / keys of objects
const object = { "USA": 50, "Mexico": 32, "Brazil": 26, "australia": 6 };
for (const key in object) {
    console.log(object[key]);
}

// 3) For each loop
list.forEach((item) => {
    console.log(item);
});


// While loops
// 4) While loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// 5) Do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

