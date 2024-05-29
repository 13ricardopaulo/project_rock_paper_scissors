//COMPUTER CHOICE
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    randomNumber = "rock";
  } else if (randomNumber === 1) {
    randomNumber = "paper";
  } else {
    randomNumber = "scissors";
  }
  return randomNumber;
}
//PLAYER CHOICE
function getHumanChoice() {
  let playerInput = prompt("Please enter Rock, Paper or, Scissors!");
  return playerInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    humanScore = ++humanScore;
    console.log("You Win!");
  } else if (
    humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock"
  ) {
    humanScore = ++humanScore;
    console.log("You Win!");
  } else if (
    humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "paper"
  ) {
    humanScore = ++humanScore;
    console.log("You Win!");
  } else {
    computerScore = ++computerScore;
    console.log("Computer Wins!");
  }

  console.log("Your score:" + "", humanScore);
  console.log("Computer score:" + "", computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
