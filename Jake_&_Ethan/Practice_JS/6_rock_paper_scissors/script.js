

function calcWinner(plrHand, cmpHand) {
    switch(plrHand){
        case cmpHand:
            return "Tie"
        case "rock":
            if (cmpHand == "paper"){
                return "Computer Wins"
            }else {
                return "player wins";
            }
        case "paper":
            
    }
}


function compTurn(){
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return choices[num];
}


const images = {
    rock : '<img src="rock.png" alt="rock" width="50px">',
    paper : '<img src="paper.png" alt="paper" width="50px">',
    scissors : '<img src="scissors.png" alt="scissors" width="50px">'
}


const rock = document.querySelector("img:nth-of-type(1)");
const paper = document.querySelector("img:nth-of-type(2)");
const scissors = document.querySelector("img:nth-of-type(3)");
const plyrChoice = document.querySelector(".plr");
const compChoice = document.querySelector(".cmp");
const winStatus = document.querySelector(".win");



rock.addEventListener('click', () => {
    plyrChoice.insertAdjacentHTML("beforeend", images["rock"]);
    const computerChoice = compTurn();
    compChoice.insertAdjacentHTML("beforeend", images[computerChoice]);
    calcWinner("rock", computerChoice);
});


paper.addEventListener('click', () => {
    console.log("Hello paper");
});

scissors.addEventListener('click', () => {
    console.log("Hello scissors");
});

