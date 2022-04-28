//Define Variables
let Playing = false;
let Pressed_Keys = [];


//Canvas
let gameWindow = document.getElementById("gameWindow");
let item = gameWindow.getContext("2d");
let Canvas_Width = 1400;
let Canvas_Height = 700;

//Player
let Player_Size = 10;
let Player_X = (Canvas_Width / 2);
let Player_Y = (Canvas_Height / 2);
let Player_Color = "blue";
let Player_Length = 10;
let Player_Segments = [{ X: Player_X, Y: Player_Y }]
for (let i = 0; i < (Player_Length - 1) * Player_Size; i++) {
    Player_Segments.push({ X: Player_X - i, Y: Player_Y })
};


//Barriers
/*let barrier = gameWindow.getContext("2d");
let currentObstacles = [];
let obstacles = [{ "name": barrier, "type": "rect", "width": Canvas_Height / 20, "height": Canvas_Height / 20, "x": Canvas_Height / 20, "y": 0, "color":"gray" }];
//Functions
function GetRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
//*/

// Makes either rectangle or cicle
function MakeItem(X, Y, Width, Height, Color, Type) {
    if (Type == "rect") {
        item.fillRect(X, Y, Width, Height);
    }
    else if (Type == "arc") {
        item.beginPath();
        item.arc(X + Width / 2, Y + Width / 2, Width / 2, 0, 2 * Math.PI);
        item.fill();
    };

    item.fillStyle = Color;
    item.fill();
}
//
function CheckObstacles(obstacle) {
    for (let obs = 0; obs < obstacles.length; obs++) {
        if (obstacle["x"] == (obstacles[obs]["x"]) + obstacles[obs]["width"] * 2) {
            return false
        };
    };
    return true
};
//Update Game
function Update() {
    item.clearRect(0, 0, Canvas_Width, Canvas_Height);

    /*if (GetRandom(0, 2) == 0) {
        let randomObstacle = obstacles[GetRandom(0, obstacles.length)];
        randomObstacle["y"] = Math.round((Math.random * Canvas_Height) / 20);
        if (CheckObstacles(randomObstacle)) {
            currentObstacles.pop(randomObstacle)
        };
    };

    for (let numObstacles = 0; numObstacles < currentObstacles.length; numObstacles++) {
        MakeItem(currentObstacles[numObstacles]["x"],currentObstacles[numObstacles]["y"],currentObstacles[numObstacles]["width"],currentObstacles[numObstacles]["height"],currentObstacles[numObstacles]["color"],currentObstacles[numObstacles]["type"],)
    };*/

    for (let o = 1; o < Player_Segments.length; o++) {
        MakeItem(Player_Segments[o]["X"], Player_Segments[o]["Y"], Player_Size, Player_Size, Player_Color, "arc");
    };
};
//Start game
function Start() {
    timer = setInterval(Update, 1);
    Playing = true;
};

function follow_segment() {
    Player_Segments[0]["Y"] = Player_Y;
    let Current_Segment = 1;
    let follow = setInterval(function () {
        if (Current_Segment >= Player_Segments.length) {
            clearInterval(follow);
        }
        else {
            // set position of curent segment to previous segmentin thelist
            // each segment follow the segment in front of it.
            Player_Segments[Current_Segment]["Y"] = Player_Segments[Current_Segment - 1]["Y"];
            Current_Segment++;
        };
    }, 5);
};
//keys
document.addEventListener("keypress", function (event) {
    if (event.key == "Enter" && Playing == false) {
        Start();
    }
    else if (event.key == "w" || event.key == "s") {
        // Adding key to list if it does not exist
        if (!Pressed_Keys.includes(event.key)) {
            Pressed_Keys.push(event.key);
        };
    };
});

// Removing key you lifted up from list
document.addEventListener("keyup", function (event) {
    Pressed_Keys.splice(Pressed_Keys.indexOf(event.key), Pressed_Keys.indexOf(event.key) + 1);
});

let Keys_timer = setInterval(function () {
    if (Pressed_Keys[0] == "w" && Player_Y >= 1) {
        Player_Y -= 10;
        follow_segment();
    }
    else if (Pressed_Keys[0] == "s" && Player_Y <= Canvas_Height - Player_Size) {
        Player_Y += 10;
        follow_segment();
    };

}, 15);