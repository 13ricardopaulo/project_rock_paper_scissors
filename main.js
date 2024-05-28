// Write getComputerChoice function.

// getComputerChoice randomly selects rock, paper, or scissors.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    randomNumber = "rock";
  } else if (randomNumber === 1) {
    randomNumber = "paper";
  } else {
    randomNumber = "scissors";
  }
}

console.log(getComputerChoice());
