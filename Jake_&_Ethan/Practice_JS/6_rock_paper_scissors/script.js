

function calcWinner(plrHand, cmpHand) {
    switch (plrHand) {
        case cmpHand:
            return outcomes.tie;
        case "rock":
            return cmpHand === "scissors" ? outcomes.win : outcomes.loose;
        case "paper":
            return cmpHand === "rock" ? outcomes.win : outcomes.loose;
        case "scissors":
            return cmpHand == "paper" ? outcomes.win : outcomes.loose;

    }
}


function compTurn() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * 3);
    return choices[num];
}


function round(player) {
    const computerChoice = compTurn();
    const winner = calcWinner(player, computerChoice);
    plyrChoice.insertAdjacentHTML("beforeend", images[player]);
    compChoice.insertAdjacentHTML("beforeend", images[computerChoice]);
    winStatus.insertAdjacentHTML("beforeend", winner);
}


const images = {
    rock: '<img src="rock.png" alt="rock" width="50px">',
    paper: '<img src="paper.png" alt="paper" width="50px">',
    scissors: '<img src="scissors.png" alt="scissors" width="50px">'
};


const outcomes = {
    win: "<span class='plr'>player &emsp;</span>",
    loose: "<span class='cmp'>computer &emsp;</span>",
    tie: "<span class='tie'>tie &emsp;</span>"
};


const rock = document.querySelector("img:nth-of-type(1)");
const paper = document.querySelector("img:nth-of-type(2)");
const scissors = document.querySelector("img:nth-of-type(3)");
const plyrChoice = document.querySelector(".plr");
const compChoice = document.querySelector(".cmp");
const winStatus = document.querySelector(".win");


rock.addEventListener('click', () => {
    round("rock");
});

paper.addEventListener('click', () => {
    round("paper");
});

scissors.addEventListener('click', () => {
    round("scissors");
});

