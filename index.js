/* Randomize the computer choice */
function getComputerChoice() {
  let choiceNumber = Math.random() * 100;
  let computerChoice = "";
  if (choiceNumber < 34) {
    computerChoice = "rock";
    return computerChoice;
  } else if (choiceNumber < 67) {
    computerChoice = "paper";
    return computerChoice;
  } else {
    computerChoice = "scissors";
    return computerChoice;
  }
}

/* Prompt the user for their choice */

function getUserChoice() {
  let humanChoice = prompt("Rock, paper, scissors? ", "Pick one").toLowerCase();
  return humanChoice;
}

/* Check if it's a tie*/
function isATie(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    compareChoices(humanChoice, computerChoice);
  }
}

/* Compare to decide the winner*/
function compareChoices(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You Win! ${String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1)} beats ${String(computerChoice).charAt(0).toUpperCase() + String(computerChoice).slice(1)}`,
    );
    humanScore++;
  } else {
    console.log(
      `You lose. ${String(computerChoice).charAt(0).toUpperCase() + String(computerChoice).slice(1)} beats ${String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1)}`,
    );
    computerScore++;
  }
}

/* Logic for 5 rounds */
function playGame() {
  isATie(humanChoice, computerChoice);
  console.log(`The score is: H ${humanScore} - C ${computerScore}`);
  isATie(humanChoice, computerChoice);
  console.log(`The score is: H ${humanScore} - C ${computerScore}`);
  isATie(humanChoice, computerChoice);
  console.log(`The score is: H ${humanScore} - C ${computerScore}`);
  isATie(humanChoice, computerChoice);
  console.log(`The score is: H ${humanScore} - C ${computerScore}`);
  isATie(humanChoice, computerChoice);
  console.log(`The final is: H ${humanScore} - C ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You Win.");
  } else {
    console.log("Too bad. You Lose.");
  }
}

/* Keep score */
let humanScore = 0;
let computerScore = 0;

/* Call functions */
const humanChoice = getUserChoice();
const computerChoice = getComputerChoice();
