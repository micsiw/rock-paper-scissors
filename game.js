function computerPlay () {
    let score = Math.floor(Math.random() * 3); 

    if (score == 0) {
        return "rock";
    }   else if (score == 1) {
        return "paper";
    }   else if (score == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock!";
    }   else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You won! Rock beats Scissors!";
        }

    if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats Paper!";
    }   else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You won! Paper beats Rock!";
        }

    if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You won! Scissors beats Paper!";
     }  else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors!";
        }

    if (playerSelection === computerSelection) {
        return "Draw!";
        }
}

const playerInput = prompt("Choose rock, paper or scissors.");
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); 