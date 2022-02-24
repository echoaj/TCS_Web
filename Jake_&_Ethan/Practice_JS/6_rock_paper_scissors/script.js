
const rock = document.querySelector("img:nth-of-type(1)");
const paper = document.querySelector("img:nth-of-type(2)");
const scissors = document.querySelector("img:nth-of-type(3)");
const plyrChoice = document.querySelector(".plr");
const compChoice = document.querySelector(".cmp");
const winStatus = document.querySelector(".win");


rock.addEventListener('click', () => {
    plyrChoice.insertAdjacentHTML("beforeend", '<img src="rock.png" alt="rock" width="50px">')
});


paper.addEventListener('click', () => {
    console.log("Hello paper");
});

scissors.addEventListener('click', () => {
    console.log("Hello scissors");
});


