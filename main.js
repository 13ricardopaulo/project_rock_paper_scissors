function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    randomNumber = "Rock";
  } else if (randomNumber === 1) {
    randomNumber = "Paper";
  } else {
    randomNumber = "Scissors";
  }
  console.log(randomNumber);
}

console.log(getComputerChoice());
