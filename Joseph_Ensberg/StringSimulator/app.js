//Define Variables
let playing = false;
let pressedKeys = [];

//Canvas
const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 700;
let gameWindow = document.getElementById("gameWindow");
let canvas = gameWindow.getContext("2d");

//Player
let playerSize = 10;
let playerX = (CANVAS_WIDTH / 2);
let playerY = (CANVAS_HEIGHT / 2);
let playerColor = "blue";
let playerLength = 5;
let playerSegments = [{ "x": playerX, "y": playerY }]
for (let i = 0; i < (playerLength - 1) * playerSize; i++) {
    playerSegments.push({ "x": playerX - i, "y": playerY })
};

//Obstacles
let currentObstacles = [];
let barrierChance = 1; //Posible chances barrier spawns each tick


function GetRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function MakeObject(X, Y, Width, Height, Color, Type) { // Makes objects
    canvas.beginPath();
    if (Type == "rect") {
        canvas.rect(X, Y, Width, Height);
    }
    else if (Type == "arc") {
        canvas.arc(X + Width / 2, Y + Width / 2, Width / 2, 0, 2 * Math.PI);
    };

    canvas.fillStyle = Color;
    canvas.fill();
    
};

function CheckObstacles(obstacle){ //Checks if obstacle is far enough away from other obstacles
    let output = true;
    for (let obs = 0; obs < currentObstacles.length; obs++) {
        if ((obstacle["x"] <= currentObstacles[obs]["x"] + currentObstacles[obs]["width"] * 2)) {
            output = false ;         
        };
    };
    return output;
};

function Collision(segment){
    console.log("collison")
    for(let possibleCollison = 0; possibleCollison <= currentObstacles - 1; possibleCollison++)
    {
        
        if(currentObstacles[possibleCollison]["x"] + currentObstacles.possibleCollison["width"] >= segment[possibleCollison]["x"] && currentObstacles[possibleCollison]["x"] <= segment[possibleCollison]["x"] + playerSize && currentObstacles[possibleCollison]["y"] + currentObstacles.possibleCollison["height"] >= segment[possibleCollison]["y"] && currentObstacles[possibleCollison]["y"] <= segment[possibleCollison]["y"] + playerSize ){
            return true;      
        };
    };
    return false;
};

function Update(){ //Creates objects shown on the canvas
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //Resets canvas

    for (let o = 0; o <= playerSegments.length - 1; o++) { //Creates all the segments for the player
        console.log(Collision())
        if(Collision(playerSegments[o])){
            console.log("hello")
        }
        MakeObject(playerSegments[o]["x"], playerSegments[o]["y"], playerSize, playerSize, playerColor, "arc");
    };

    if (GetRandom(1, barrierChance + 1) == 1) { //Add barrier to currentObstacles
        let barrier = { "name": "barrier", "type": "rect", "width": CANVAS_HEIGHT / 20, "height": CANVAS_HEIGHT / 20, "x": CANVAS_WIDTH, "y": 0, "color":"gray" }; //Standard Barrier
        barrier["y"] = barrier["height"] * Math.round((GetRandom(0,CANVAS_HEIGHT - barrier["height"] + 1) ) / barrier["height"]); //Set random y of barrier
        if (CheckObstacles(barrier)) { //If new barrier is far enough away from other barriers on the x
            currentObstacles.push(JSON.parse(JSON.stringify(barrier))); //Add to currentObstacles 
        };
    };
    
    for (let numObstacles = 0; numObstacles < currentObstacles.length; numObstacles++) {//Make obstacles on canvas
        currentObstacles[numObstacles]["x"] -= 1; //Moves the obstacles
        if(currentObstacles[numObstacles]["x"] + currentObstacles[numObstacles]["width"] < 0){ //If an obstacle is past the view
          currentObstacles.shift(); //Remove the obstacle
        }
        MakeObject(currentObstacles[numObstacles]["x"],currentObstacles[numObstacles]["y"],currentObstacles[numObstacles]["width"],currentObstacles[numObstacles]["height"],currentObstacles[numObstacles]["color"],currentObstacles[numObstacles]["type"]) //Create obstacles
    };

    
};

function Start() {
    timer = setInterval(Update, 1);
    playing = true;
};

function follow_segment() {
    playerSegments[0]["y"] = playerY;
    let Current_Segment = 1;
    let follow = setInterval(function () {
        if (Current_Segment >= playerSegments.length) {
            clearInterval(follow);
        }
        else {
            // set position of curent segment to previous segmentin thelist
            // each segment follow the segment in front of it.
            playerSegments[Current_Segment]["y"] = playerSegments[Current_Segment - 1]["y"];
            Current_Segment++;
        };
    }, 5);
};
//keys
document.addEventListener("keypress", function (event) {
    if (event.key == "Enter" && playing == false) {
        Start();
    }
    else if (event.key == "w" || event.key == "s") {
        if (!pressedKeys.includes(event.key)) {
            pressedKeys.push(event.key);
        };
    };
});

// Removing key you lifted up from list
document.addEventListener("keyup", function (event) {
    pressedKeys.splice(pressedKeys.indexOf(event.key), pressedKeys.indexOf(event.key) + 1);
});

let Keys_timer = setInterval(function () {
    if (pressedKeys[0] == "w" && playerY >= 1) {
        playerY -= 1;
        follow_segment();
    }
    else if (pressedKeys[0] == "s" && playerY <= CANVAS_HEIGHT - playerSize) {
        playerY += 1;
        follow_segment();
    };

}, 15);