/* Randomize the computer choice */
function getComputerChoice() {
  let choiceNumber = Math.random() * 100;
  if (choiceNumber < 34) {
    choice = "rock";
  } else if (choiceNumber < 67) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
}

/* Prompt the user for their choice */

function getUserChoice() {
  let userChoice = prompt("Rock, paper, scissors? ", "Pick one").toLowerCase();
  return userChoice;
}

/* Compare the two choices */
function isATie(humanChoice, computerChoice) {
  humanChoice === computerChoice
    ? alert("It's a tie!")
    : compareChoices(humanChoice, computerChoice);
}

function compareChoices(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
	else {
		alert(`You lose. ${computerChoice} beats ${humanChoice}`);
		computerScore++;
	}
}

/* Keep score */
let humanScore = 0;
let computerScore = 0;

/* Call functions */

getUserChoice();
getComputerChoice();
