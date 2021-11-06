

start = {
    "life":[0, 0, "job", "career"],
    "job":[1, 40000, "career", "keepjob"],
    "keepjob":[5, 200000, "wife", "single"],
    "college":[4, -100000, "masters", "career"],
    "masters":[2, -50000, "PHD", "goodcareer"],
    "career":[5, 10000, "wife", "single"],
    "goodcareer":[5, 20000, "wife", "sngle"],
    "PHD":[4, -100000, "greatcareer", "greatcareer"],
    "single":[7, 0, "end", "end"],
    "greatcareer":[5, 500000, "wife", "single"],
    "wife":[7, 200000, "kids", "end"],
    "kids":[1, 14000, "end", "end"],
    "end":[]
}


// update variables
function updateState(){
    time += list[0];
    cash += list[1];
    buttonName1 = list[2];
    buttonName2 = list[3];
}

// update html
function updateHTML(){
    timeEL.innerText = `Time: ${time} years`;
    moneyEL.innerText = `Money: ${cash}`;
    button1EL.innerText = buttonName1;
    button2EL.innerText = buttonName2;
}

function nextLevel(i){
    let choice = list[i];
    list = start[choice];
}

function button(option) {
    nextLevel(option);
    updateState();
    updateHTML();
}

let button1EL = document.getElementById("job");
let button2EL = document.getElementById("college");
let statusEL = document.getElementById("status")
let moneyEL = document.getElementById("money");
let timeEL = document.getElementById("time");

let cash = 0;
let time = 0;
let buttonName1 = "";
let buttonName2 = "";
let list = start["life"];


button1EL.addEventListener("click", button.bind(this, 2));
button2EL.addEventListener("click", button.bind(this, 3));

// document.onclick = function (event) {
//     // Compensate for IE<9's non-standard event model
//     //
//     if (event === undefined) event = window.event;
//     var target = 'target' in event ? event.target : event.srcElement;

//     alert('clicked on ' + target.tagName);
// };

// jobButton.onclick = jobPicked;

























/*

var money = 0;
var time = 0;
var list = start["life"];
var buttonName1 = "";
var buttonName2 = "";


function updateState() {
    time += list[0];
    money += list[1];
    buttonName1 = list[2];
    buttonName2 = list[3];
}

function updateText() {
    timeEL.innerText = `Time: ${time} years`;
    moneyEL.innerText = `Money: $${money}`;
    button1EL.innerText = buttonName1;
    button2EL.innerText = buttonName2;
}

function nextLevel(i) {
    let choice = list[i];
    list = start[choice];
}


// Level 1
function button(option) {
    nextLevel(option);
    updateState();
    updateText();
}


let button1EL = document.getElementById("job");
let button2EL = document.getElementById("college");
let statusEL = document.getElementById("status");
let moneyEL = document.getElementById("money");
let timeEL = document.getElementById("time");
let cashEL = 0;

button1EL.addEventListener("click", button.bind(this, 2), false);
button2EL.addEventListener("click", button.bind(this, 3), false);

*/