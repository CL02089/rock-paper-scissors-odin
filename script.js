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
  //Rules:
  // Paper beats rock
  // Rock beats scissors
  // Scissors beats paper

  // Here some logic if playerSelect > computerSelection --> player win
  // if playerSelect < computerSelection -- > computer win
  // else tie
  if (playerSelect === computerSelection)
    return `It's a tie. You've both selected ${playerSelect}`;
  if (playerSelect === "rock" && computerSelection === "paper") {
    winner = "computer";
    return `You lost! Paper beats rock!`;
  }
  if (playerSelect === "rock" && computerSelection === "scissors") {
    winner = "player";
    return `You win! Rock beats scissors!`;
  }

  if (playerSelect === "paper" && computerSelection === "rock") {
    winner = "player";
    return `You win! Paper beats rock!`;
  }

  if (playerSelect === "paper" && computerSelection === "scissors") {
    winner = "computer";
    return `You lost! Scissors beats paper!`;
  }

  if (playerSelect === "scissors" && computerSelection === "rock") {
    winner = "computer";
    return `You lost! Rock beats scissors!`;
  }

  if (playerSelect === "scissors" && computerSelection === "paper") {
    winner = "player";
    return `You win! Scissors beats paper!`;
  }

  //"Return" here with some logic
}

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

const game = function () {};

// Call playround
// Player selection must be prompted
// log win or lose
// keeps score
// diplay the winner
