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

/*
function game() {
*/
    let playerScore = 0;
    let computerScore = 0;
/*
    function play() {
*/


        function playRound(playerSelection, computerSelection) {

            console.log(computerScore)
            console.log(playerScore)

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
            }  else if (playerSelection === "scissors" && computerSelection === "rock"){
                computerScore++;
                computerScr.innerHTML = "Computer: " + computerScore;
                }
        
            if (playerSelection === computerSelection) {
                } 
                
        }
     
/*
}
 
    for (i=0; i>=0; i++) {
        if (playerScore == 5 || computerScore == 5) {
            break;
        }
        play();
    }  

}*/

const container = document.querySelector('.container');
const gameResult = document.createElement('div');
container.appendChild(gameResult);

const playerDisplay = document.createElement('div');
container.appendChild(playerDisplay);

const computerDisplay = document.createElement("div");
container.appendChild(computerDisplay);

const playerScr = document.querySelector('.player-score');
const computerScr = document.querySelector('.computer-score');

let rock = document.getElementById("btn-rock");
let paper = document.getElementById("btn-paper");
let scissors = document.getElementById("btn-scissors");

rock.addEventListener ("click", function() {
    let result = playRound("rock", computerPlay());
    gameResult.textContent = result;
});

paper.addEventListener ("click", function() {
    gameResult.textContent = playRound("paper", computerPlay());
});

scissors.addEventListener ("click", function() {
    gameResult.textContent = playRound("scissors", computerPlay());
});