

// Whenever you put "Async" infront of a functions, by default
// that function returns a promise

// Await will pause the execution of a the Async function until
// a promise is resolved.
var aa = document.querySelector(".aa");

const colorAA = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            aa.style.backgroundColor = color;
            resolve();
        }, 1000);
    });
};

async function changeColor() {
    await colorAA("red");
    await colorAA("blue");
    await colorAA("purple");
    await colorAA("green");
    await colorAA("yellow");
    await colorAA("orange");
    await colorAA("pink");
}

changeColor();
