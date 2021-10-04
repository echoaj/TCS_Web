

// const state = {
//     "job": jobPicked,
//     "college": college
// }


// Level 1

function jobPicked() {
    cash += 40000;
    money.innerText = "Money: $" + cash;
    time.innerText = "Time: 1 year";
    lifeStatus.innerText = "You have a new job \n press click to continue."
    button1.style.display = "none";
    button2.style.display = "none";
}

let button1 = document.getElementById("job");
let button2 = document.getElementById("college");
let lifeStatus = document.getElementById("status")
let money = document.getElementById("money");
let time = document.getElementById("time");
let cash = 0


document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    alert('clicked on '+target.tagName);
};

// jobButton.onclick = jobPicked;
button1.addEventListener("click", jobPicked, false);























































/*
function action() {
    console.log("hello");
    newButton = document.createElement("hr");
    document.body.appendChild(newButton);
    button.style.display = "none";
}


let button = document.getElementById("job");
button.onclick = action;
*/