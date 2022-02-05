

// 1) For Loop
for (let i = 10; i > 0; i--) {
    console.log("Hi" + i);
}

// 2) For of loop
const list1 = ["Alex", "Jake", "Ethan", "Marcel"];
for (let element of list1) {
    console.log(element);
}

// 3) For in loop
const list2 = ["Alex", "Jake", "Ethan", "Marcel"];
const list3 = { "Alex": 26, "Jake": 11, "Ethan": 11, "Marcel": 46 };
for (let index in list3) {
    console.log(list3[index]);
}

// 4) For each loop
list1.forEach((item) => {
    console.log(item);
});

// 5) While Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// 6) Do While Loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);