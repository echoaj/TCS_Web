

//Canvas
// let gameWindow = document.getElementById("gameWindow");
// let item = gameWindow.getContext("2d");
// let Canvas_Width = 1400;
// let Canvas_Height = 700;
// let Color = "blue";

// item.fillStyle = Color;
// item.rect(700, 300, 100, 100);
// item.fill("blue");

const canvas = document.getElementById('gameWindow');
const ctx = canvas.getContext('2d');
let Color = "blue";
// ctx.fillStyle = Color;
// ctx.fillRect(10, 10, 150, 100);
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.fill()