function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    randomNumber = "Rock";
  } else if (randomNumber === 1) {
    randomNumber = "Paper";
  } else {
    randomNumber = "Scissors";
  }
  return randomNumber;
}

console.log(getComputerChoice());
