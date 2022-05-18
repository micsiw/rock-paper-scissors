let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    switch (computerSelection) {
        case "rock":
            computerDecision.style.display = "inline";
            computerDecision.src = "images/stone.png"; 
            break;
        case "paper":
            computerDecision.style.display = "inline";
            computerDecision.src = "images/paper-airplane.png"; 
            break;
        case "scissors":
            computerDecision.style.display = "inline";
            computerDecision.src = "images/scissors.png"; 
            break;
    }

    playerDisplay.textContent = `You played: ${playerSelection}`;
    computerDisplay.textContent = `Computer played: ${computerSelection}`;

    if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
    }   else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
        }
        
    if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
    }   else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
        }
        
    if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
    }   else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
        }

    if (playerScore === 5 || computerScore === 5){
        gameSummary();
    }
}

function computerPlay() {
    let score = Math.floor(Math.random() * 3); 

    if (score == 0) {
        return "rock";
    }   else if (score == 1) {
        return "paper";
    }   else if (score == 2) {
        return "scissors";
    }
}
        
function gameSummary() {
    if (playerScore === 5) {
        playerWonMsg.textContent = 'Congratulations! You won! If you want to play again, click button below.';
        container.appendChild(restartButton);           
    }   else if (computerScore === 5) {
        computerWonMsg.textContent = 'Woopsie! You lost. If you want to play again, click button below.';
        container.appendChild(restartButton);
    }
}

function resetGame() {
    window.location.reload();
}

let rock = document.getElementById("btn-rock");
let paper = document.getElementById("btn-paper");
let scissors = document.getElementById("btn-scissors");

rock.addEventListener ("click", function() {
    if (playerScore < 5 && computerScore < 5) {
        playRound("rock", computerPlay());
    }
});
    
paper.addEventListener ("click", function() {
    if (playerScore < 5 && computerScore < 5) {
            playRound("paper", computerPlay());
    }
});
    
scissors.addEventListener ("click", function() {
    if (playerScore < 5 && computerScore < 5) {
            playRound("scissors", computerPlay());
    }
});

const container = document.querySelector('.container');
const gameResult = document.createElement('div');
container.appendChild(gameResult);

const playerDisplay = document.createElement('div');
container.appendChild(playerDisplay);

const computerDisplay = document.createElement("div");
container.appendChild(computerDisplay);

const computerDecision = document.querySelector('.computer-decision');

const playerScr = document.querySelector('.player-score');
const computerScr = document.querySelector('.computer-score');

const playerWonMsg = document.createElement('div');
container.appendChild(playerWonMsg);

const computerWonMsg = document.createElement('div');
container.appendChild(computerWonMsg);

const restartButton = document.createElement('button');
restartButton.textContent = 'Play again';
restartButton.onclick = resetGame;

