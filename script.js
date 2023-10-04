"use-strict";

const getComputerChoice = function () {
  let helperNumber = Math.trunc(Math.random() * 3 + 1);
  if (helperNumber === 1) return "rock";
  if (helperNumber === 2) return "paper";
  if (helperNumber === 3) return "scissors";
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection)
    return `It's a tie. You've both selected ${playerSelection}`;
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper")
    return `You lose! Paper beats rock!`;
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  )
    return `You win! Rock beats scissors!`;

  if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
    return `You win! Paper beats rock!`;

  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissors"
  )
    return `You lost! Scissors beats paper!`;

  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  )
    return `You lost! Rock beats scissors!`;

  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  )
    return `You win! Scissors beats paper!`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
