
var prom = document.querySelector(".prom");

const colorPromise = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            prom.style.backgroundColor = color;
            resolve()
        }, 1000)
    })
}

colorPromise("red")
    .then( () => {return colorPromise("blue")})
    .then( () => {return colorPromise("purple")})
    .then( () => {return colorPromise("green")})
    .then( () => {return colorPromise("yellow")})
    .then( () => {return colorPromise("orange")})
    .then( () => {return colorPromise("pink")});
