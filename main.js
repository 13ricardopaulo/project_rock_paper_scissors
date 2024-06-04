//GET RANDOM NUMBER TO CHOOSE ONE OF THE OPTIONS TO BE THE COMPUTER CHOICE
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    randomNumber = "rock";
  } else if (randomNumber == 1) {
    randomNumber = "paper";
  } else {
    randomNumber = "scissors";
  }
  return randomNumber;
}

//GET HUMAN CHOICE AND MAKE IT CASE INSENSITIVE
function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter Rock, Paper or Scissors!"
  ).toLowerCase();
  return humanChoice;
}

//GLOBAL SCOPE VARIABLES
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//LOGIC FOR A SINGLE ROUND
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(
      `You chose: ${humanSelection} --- Computer chose: ${computerSelection}`
    );
    console.log("TIE GAME!!");
    console.log(`You: ${humanScore} --- Computer: ${computerScore}`);
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log(
      `You chose: ${humanSelection} --- Computer chose: ${computerSelection}`
    );
    console.log(`YOU WIN! ${humanSelection} beats ${computerSelection}!`);
    humanScore = humanScore + 1;
    console.log(`You: ${humanScore} --- Computer: ${computerScore}`);
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(
      `You chose: ${humanSelection} --- Computer chose: ${computerSelection}`
    );
    console.log(`YOU WIN! ${humanSelection} beats ${computerSelection}!`);
    humanScore = humanScore + 1;
    console.log(`You: ${humanScore} --- Computer: ${computerScore}`);
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log(
      `You chose: ${humanSelection} --- Computer chose: ${computerSelection}`
    );
    console.log(`YOU WIN! ${humanSelection} beats ${computerSelection}!`);
    humanScore = humanScore + 1;
    console.log(`You: ${humanScore} --- Computer: ${computerScore}`);
  } else {
    console.log(
      `You chose: ${humanSelection} --- Computer chose: ${computerSelection}`
    );
    console.log(`YOU LOSE! ${computerSelection} beats ${humanSelection}`);
    computerScore = computerScore + 1;
    console.log(`You: ${humanScore} --- Computer: ${computerScore}`);
  }
}

playRound(humanSelection, computerSelection);
