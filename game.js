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

    if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
        gameCommentary.innerHTML = "You lose! Paper beats rock."
    }   else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
        gameCommentary.innerHTML = "You won! Rock beats scissors."
        }
        
    if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
        gameCommentary.innerHTML = "Damn! Scissors cut paper."
    }   else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
        gameCommentary.innerHTML = "Nice! Paper beats rock."
        }
        
    if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        playerScr.innerHTML = "You: " + playerScore;
        gameCommentary.innerHTML = "Keep it on! Scissors cut paper."
    }   else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        computerScr.innerHTML = "Computer: " + computerScore;
        gameCommentary.innerHTML = "You lose! Rock blunts scissors."
        }

    if (playerSelection === computerSelection){
        gameCommentary.innerHTML = "Draw!"
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
        exitMsg.appendChild(restartButton);           
    }   else if (computerScore === 5) {
        computerWonMsg.textContent = 'Woopsie! You lost. If you want to play again, click button below.';
        exitMsg.appendChild(restartButton);
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

const exitMsg = document.querySelector('.exit-message');
exitMsg.style.fontSize = "28px";

const computerDecision = document.querySelector('.computer-decision');

const gameCommentary = document.querySelector('.commentary');

const playerScr = document.querySelector('.player-score');
const computerScr = document.querySelector('.computer-score');

const playerWonMsg = document.createElement('div');
exitMsg.appendChild(playerWonMsg);

const computerWonMsg = document.createElement('div');
exitMsg.appendChild(computerWonMsg);

const restartButton = document.createElement('input');
restartButton.type = "image";
restartButton.src = "images/play-again.png"
restartButton.onclick = resetGame;

