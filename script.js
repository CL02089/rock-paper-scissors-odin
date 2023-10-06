"use-strict";

const getComputerChoice = function () {
  let helperNumber = Math.trunc(Math.random() * 3 + 1);
  if (helperNumber === 1) return "rock";
  if (helperNumber === 2) return "paper";
  if (helperNumber === 3) return "scissors";
};

function playRound(playerSelection, computerSelection) {
  const playerSelect = playerSelection.toLowerCase();
  let winner = "";

  let finalString = "";

  if (playerSelect === computerSelection) {
    win = "tie";
    finalString = `It's a tie. You've both selected ${playerSelect}`;
  }

  if (
    (playerSelect === "rock" && computerSelection === "scissors") ||
    (playerSelect === "paper" && computerSelection === "rock") ||
    (playerSelect === "scissors" && computerSelection === "paper")
  ) {
    win = true;
    finalString = `You win! ${playerSelect} beats ${computerSelection}`;
  }

  if (
    (playerSelect === "rock" && computerSelection === "paper") ||
    (playerSelect === "paper" && computerSelection === "scissors") ||
    (playerSelect === "scissors" && computerSelection === "rock")
  ) {
    win = false;
    finalString = `You lost! ${computerSelection} beats ${playerSelect}`;
  }

  return finalString;
  //Rules:
  // Paper beats rock
  // Rock beats scissors
  // Scissors beats paper

  // Here some logic if playerSelect > computerSelection --> player win
  // if playerSelect < computerSelection -- > computer win
  // else tie

  //"Return" here with some logic
}

// console.log(playRound(playerSelection, computerSelection));

const game = function () {
  let round = 1;
  let win;
  const playerSelection = prompt("Rock, paper or scissors?");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
};

let playerScore = 0;
let computerScore = 0;

for (i = 1; i <= 5; i++) {
  game();
  if (win) playerScore++;
  if (!win) computerScore++;
  if (win === "tie") {
    playerScore += 0;
    computerScore += 0;
  }
}

if (playerScore > computerScore) {
  console.log(
    `You WIN! You beat the computer with: ${playerScore} : ${computerScore}`
  );
} else if (playerScore < computerScore) {
  console.log(`You lost! The computer won: ${computerScore} : ${playerScore}`);
} else if (playerScore === computerScore) {
  console.log(`It's a tie! You've both reach ${playerScore} points`);
}

// Call playround
// Player selection must be prompted
// log win or lose
// keeps score
// diplay the winner
