/* Prompt the user for their choice */
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
  console.log(choiceNumber);
	console.log(choice);
}

getComputerChoice();
/* Compare the two choices */
/* Keep score */
