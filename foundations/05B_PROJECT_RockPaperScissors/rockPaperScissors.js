const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");
const winCounter = document.querySelector(".wins");
const lossCounter = document.querySelector(".losses");
let wins = 0;
let losses = 0;
let playerChoice = ""
let computerChoice = ""


// rock = 1, paper = 2, scissors = 3
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    computerChoice = "rock"
  } else if (randomNum === 2) {
    computerChoice = "paper"
  } else if (randomNum === 3) {
    computerChoice = "scissors"
  }
  return computerChoice;
};

const playRound = ()=> {
  if (playerChoice === computerChoice) {
    console.log("Computer chose " + computerChoice + " Its a DRAW")
  }
  else if (playerChoice === "rock" && computerChoice === "paper") {
    console.log("computer chose " + computerChoice + " YOU LOSE")
    losses++
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("computer chose " + computerChoice + " YOU WIN")
    wins++
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    console.log("computer chose " + computerChoice + " YOU LOSE")
    losses++
  } else if (playerChoice === "paper" && computerChoice === "rock"){
    console.log("computer chose " + computerChoice + " YOU WIN")
    wins++
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    console.log("computer chose " + computerChoice + " YOU LOSE")
    losses++
  } else if (playerChoice === "scissors" && computerChoice === "paper"){
    console.log("computer chose " + computerChoice + " YOU WIN")
    wins++
  }  
  winCounter.innerText = wins;
  lossCounter.innerText = losses;
}

// player Chooses rock
userRock.addEventListener("click", () => {
  playerChoice = "rock"
  getComputerChoice();

  playRound();
  checkScore();
});

// Player chooses paper
userPaper.addEventListener("click", () => {
  playerChoice = "paper"
  getComputerChoice();

  playRound()  
  checkScore();
});

// player chooses scissors
userScissors.addEventListener("click", () => {
  playerChoice = "scissors"
  getComputerChoice();

  playRound();
  checkScore();
});

const checkScore = () => {
  if (wins >= 5 || losses >= 5) {
    if (wins >= 5) {
      alert("Game: YOU WIN")
    } else {
      alert("GAME: COMPUTER WINS YOU SUCK")
    }
  };
};