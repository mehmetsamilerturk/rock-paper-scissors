const displayResults = document.querySelector('#displayResults');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const currentRound_div = document.querySelector('#currentRound');
const playerScore_div = document.querySelector('#playerScore');
const computerScore_div = document.querySelector('#computerScore');
const resultsContainer = document.querySelector('.resultsContainer');

let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

// Create a function called computerPlay that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}
// Write a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'ROCK') {
    if (computerSelection === 'Rock') {
      displayResults.textContent = "Rock and rock. Draw";
    } else if (computerSelection === 'Paper') {
      computerScore++;
      displayResults.textContent = "Paper beats rock. Computer wins";
    } else if (computerSelection === 'Scissors') {
      playerScore++;
      displayResults.textContent = "Rock beats scissors. Player wins";
    }
  } else if (playerSelection === 'PAPER') {
    if (computerSelection === 'Rock') {
      playerScore++;
      displayResults.textContent = "Paper beats rock. Player wins";
    } else if (computerSelection === 'Paper') {
      displayResults.textContent = "Paper and paper. Draw";
    } else if (computerSelection === 'Scissors') {
      computerScore++;
      displayResults.textContent = "Scissors beats paper. Computer wins";
    }
  } else if (playerSelection === 'SCISSORS') {
    if (computerSelection === 'Rock') {
      computerScore++;
      displayResults.textContent = "Rock beats scissors. Computer wins";
    } else if (computerSelection === 'Paper') {
      playerScore++;
      displayResults.textContent = "Scissors beats paper. Player wins";
    } else if (computerSelection === 'Scissors') {
      displayResults.textContent = "Scissors and scissors. Draw";
    }
  }
}

function decideWinner() {
  playerScore_div.textContent = `Player score: ${playerScore}`;
  computerScore_div.textContent = `Computer score: ${computerScore}`;
  currentRound++;
  currentRound_div.textContent = `Round: ${currentRound}`;
  if (playerScore > 4) {
    displayResults.textContent = "Player won! Press a button to start again";
    computerScore = 0;
    playerScore = 0;
    currentRound = 0;
  } else if (computerScore > 4) {
    displayResults.textContent = "Computer won! Press a button to start again";
    computerScore = 0;
    playerScore = 0;
    currentRound = 0;
  }
}

rock.addEventListener('click', () => {
  playRound('ROCK', computerPlay());
  decideWinner();
});

paper.addEventListener('click', () => {
  playRound('PAPER', computerPlay());
  decideWinner();
});

scissors.addEventListener('click', () => {
  playRound('SCISSORS', computerPlay());
  decideWinner();
});