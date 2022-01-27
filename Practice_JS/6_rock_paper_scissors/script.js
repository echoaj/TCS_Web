function calcWinner(plrHand, cmpHand) {
    switch (plrHand) {
        case cmpHand:
            return outcomes.tie;
        case "rock":
            return cmpHand === "scissors" ? outcomes.win : outcomes.loose;
        case "paper":
            return cmpHand === "rock" ? outcomes.win : outcomes.loose;
        case "scissors":
            return cmpHand === "paper" ? outcomes.win : outcomes.loose;
    }
}

function compTurn() {
    const options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function round(plyr) {
    let comp = compTurn();
    let winner = calcWinner(plyr, comp);
    plyrChoice.insertAdjacentHTML("beforeend", images[plyr]);
    compChoice.insertAdjacentHTML("beforeend", images[comp]);
    winStatus.insertAdjacentHTML("beforeend", winner);
}

const images = {
    rock: "<img src='rock.png' width='50px'>",
    paper: "<img src='paper.jpg' width='50px'>",
    scissors: "<img src='scissors.png' width='50px'>"
};

const outcomes = {
    win: "<span class='plr'>player &emsp;</span>",
    loose: "<span class='cmp'>comp &emsp;</span>",
    tie: "<span class='tie'>tie &emsp;</span>",
};

const rock = document.querySelector('img:nth-of-type(1)');
const paper = document.querySelector('img:nth-of-type(2)');
const scissors = document.querySelector('img:nth-of-type(3)');
const plyrChoice = document.querySelector('h2:nth-of-type(1)');
const compChoice = document.querySelector('h2:nth-of-type(2)');
const winStatus = document.querySelector('h2:nth-of-type(3)');

rock.addEventListener('click', () => {
    round("rock");
});

paper.addEventListener('click', () => {
    round("paper");
});

scissors.addEventListener('click', () => {
    round("scissors");
});
