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
  let userChoice = prompt("Rock, paper, scissors? ", "Pick one");
  return userChoice;
}

/* Compare the two choices */
/* Keep score */
/* Call functions */

getUserChoice();
getComputerChoice();

