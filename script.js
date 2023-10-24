'use-strict';

function playRound(playerSelection) {
  const playerSelect = playerSelection;

  const getComputerChoice = function () {
    let helperNumber = Math.trunc(Math.random() * 3 + 1);
    if (helperNumber === 1) return 'rock';
    if (helperNumber === 2) return 'paper';
    if (helperNumber === 3) return 'scissors';
  };

  let computerSelect = getComputerChoice();

  let winner = '';

  if (playerSelect === computerSelect) {
    winner = 'tie';
  }

  if (
    (playerSelect === 'rock' && computerSelect === 'scissors') ||
    (playerSelect === 'paper' && computerSelect === 'rock') ||
    (playerSelect === 'scissors' && computerSelect === 'paper')
  ) {
    winner = 'player';
  }

  if (
    (playerSelect === 'rock' && computerSelect === 'paper') ||
    (playerSelect === 'paper' && computerSelect === 'scissors') ||
    (playerSelect === 'scissors' && computerSelect === 'rock')
  ) {
    winner = 'computer';
  }
  makeDisplay(winner, playerSelect, computerSelect);
  updateScores(winner);
}

const display = document.querySelector('.display');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const buttons = document.querySelectorAll('.btns');

buttons.forEach((item) => {
  item.addEventListener('click', (event) => {
    let playerSelect = event.target.id;
    playRound(playerSelect);
  });
});

const makeDisplay = function (winner, playerSelect, computerSelect) {
  if (winner === 'player') {
    display.textContent = `You win! ${playerSelect} beats ${computerSelect}`;
  }
  if (winner === 'computer') {
    display.textContent = `You lost! ${computerSelect} beats ${playerSelect}`;
  }
  if (winner === 'tie') {
    display.textContent = `It's a tie. You've both selected ${playerSelect}`;
  }
};

let pScore = 0;
let cScore = 0;
const maxScore = 5;

const updateScores = function (winner) {
  if (winner === 'player') {
    pScore++;
    playerScore.textContent = pScore;
  }
  if (winner === 'computer') {
    cScore++;
    computerScore.textContent = cScore;
  } else {
    return;
  }

  endGame(pScore, cScore);
};

const endGame = function (pScore, cScore) {
  if (pScore === maxScore) {
    display.textContent = `You win! 🎉 Refresh the page to play again!`;
    buttons.forEach((i) => {
      i.disabled = true;
    });
  }
  if (cScore === maxScore) {
    display.textContent = `You lost! 🙁 Refresh the page to play again!`;
    buttons.forEach((i) => {
      i.disabled = true;
    });
  }
};
