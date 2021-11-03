// Create a function called computerPlay that randomly returns either "Rock", "Paper" or "Scissors"
function computerPlay() {
  const picks = ["Rock", "Paper", "Scissors"];
  return picks[Math.floor(Math.random() * picks.length)];
}

// Returns input from the user and converts it to upper case
function playerPlay() {
  return prompt("Rock, paper, scissors?").toUpperCase();
}
// Create variables to store scores and rounds
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;

// Write a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let result = "";
  
  switch (playerSelection) {
    case "ROCK":
      if (computerSelection === "Rock") {
        return result = "Draw! Rock and rock";
      } else if (computerSelection === "Paper") {
        computerScore++;
        return result = "You lose! Paper beats rock";
      } else {
        playerScore++;
        return result = "You win! Rock beats scissors";
      }

    case "PAPER":
      if (computerSelection === "Rock") {
        playerScore++;
        return result = "You win! Paper beats rock";
      } else if (computerSelection === "Paper") {
        return result = "Draw! Paper and paper";
      } else {
        computerScore++;
        return result = "You lose! Scissors beats paper";
      }

    case "SCISSORS":
      if (computerSelection === "Rock") {
        computerScore++;
        return result = "You lose! Rock beats scissors";
      } else if (computerSelection === "Paper") {
        playerScore++;
        return result = "You win! Scissors beats paper";
      } else {
        return result = "Draw! Scissors and scissors";
      }

    default:
      return result = "Canceled or invalid input";
  }
}

const displayResults = document.querySelector('#displayResults');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  displayResults.textContent = playRound('ROCK', computerPlay());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  displayResults.textContent = playRound('PAPER', computerPlay());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  displayResults.textContent = playRound('SCISSORS', computerPlay());
});
