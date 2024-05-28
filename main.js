// Write getComputerChoice function.
// getComputerChoice randomly selects rock, paper, or scissors.

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

// Write getHumanChoice function.
// Ask the user to input Rock, Paper, or Scissors.

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper, or Scissors!");
}

// Declare humanScore variable in the global scope.
// Declare computerScore variable in the global scope.

let humanScore = 0;
let computerScore = 0;

console.log(computerScore);
