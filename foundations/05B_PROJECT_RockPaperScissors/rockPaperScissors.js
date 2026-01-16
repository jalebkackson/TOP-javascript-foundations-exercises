const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");
const winCounter = document.querySelector(".wins");
const lossCounter = document.querySelector(".losses");
let wins = 0;
let losses = 0;

// 1 rock
// 2 paper
// 3 scissors
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  return randomNum;
};

userRock.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  if (computerChoice === 1) {
    console.log("computer chose rock, its a draw");
  } else if (computerChoice === 2) {
    console.log("computer chose paper, YOU LOSE BITCH");
    losses++;
    lossCounter.innerText = losses;
  } else if (computerChoice === 3) {
    console.log("computer chose Scissors, YOU WIN");
    wins++;
    winCounter.innerText = wins;
  }
});

userPaper.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  if (computerChoice === 1) {
    console.log("computer chose rock, YOU WIN!!!!@!@!");
    wins++;
    winCounter.innerText = wins;
  } else if (computerChoice === 2) {
    console.log("computer chose paper, It's a fucking draw");
  } else if (computerChoice === 3) {
    console.log("computer chose Scissors, YOU FUCKING SUCK");
    losses++;
    lossCounter.innerText = losses;
  }
});

userScissors.addEventListener("click", () => {
  const computerChoice = getComputerChoice();

  if (computerChoice === 1) {
    console.log("computer chose rock, LOSER FAGGOT!!!");
    losses++;
    lossCounter.innerText = losses;
  } else if (computerChoice === 2) {
    console.log("computer chose paper, YOU WIN!!!!");
    wins++;
    winCounter.innerText = wins;
  } else if (computerChoice === 3) {
    console.log("computer chose Scissors, DRAAAWWW");
  }
});
