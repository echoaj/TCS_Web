
// Promise will be in 1 of 3 states
// Pending      -- hasn't been settled to a value yet
// Fulfilled    -- settled successfully
// Rejected     -- settled unsucceessfully


// Example 1
let good = false;

let fetchData = new Promise((resolve, reject) => {
    if (good) {
        resolve("fetch successful.");
    } else {
        reject("Error fetching data.");
    }
});


/*
// Consume a promise
fetchData.then(msg => {
    console.log(msg);
}).catch(errmsg => {
    console.log(errmsg);
});


// Example 2

let idle = function (action) {
    return new Promise((resolve, reject) => {
        resolve("In Idle");
    });
};
let walk = new Promise((resolve, reject) => {
    resolve("In Walk");
});
let jump = new Promise((resolve, reject) => {
    resolve("In Jump");
});

idle(walk);*/  