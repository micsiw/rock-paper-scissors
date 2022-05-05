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

const container = document.querySelector('.container');
const scoreDisplay = document.createElement('div');
container.appendChild(scoreDisplay);

let rock = document.getElementById("btn-rock");
let paper = document.getElementById("btn-paper");
let scissors = document.getElementById("btn-scissors");

rock.addEventListener ("click", function() {
    scoreDisplay.textContent = playRound("rock", computerPlay());
});

paper.addEventListener ("click", function() {
    scoreDisplay.textContent = playRound("paper", computerPlay());
});

scissors.addEventListener ("click", function() {
    scoreDisplay.textContent = playRound("scissors", computerPlay());
});

/*
function game() {

    let playerScore = 0;
    let computerScore = 0;

    function play() {

    const playerInput = prompt("Choose rock, paper or scissors.");
*/


        function playRound(playerSelection, computerPlay) {

            console.log(playerSelection + " - to zagral gracz")
            console.log(computerPlay + " - to zagral komputer")

            if (playerSelection === "rock" && computerPlay === "paper"){
                return "You lose! Paper beats Rock!";
            }   else if (playerSelection === "rock" && computerPlay === "scissors"){
                return "You won! Rock beats Scissors!";
                }
        
            if (playerSelection === "paper" && computerPlay === "scissors"){
                return "You lose! Scissors beats Paper!";
            }   else if (playerSelection === "paper" && computerPlay === "rock"){
                return "You won! Paper beats Rock!";
                }
        
            if (playerSelection === "scissors" && computerPlay === "paper"){
                return "You won! Scissors beats Paper!";
            }  else if (playerSelection === "scissors" && computerPlay === "rock"){
                return "You lose! Rock beats Scissors!";
                }
        
            if (playerSelection === computerPlay) {
                return "Draw!";
                } 
        }
/*
        let score = playRound();

        function gameScore (score) {
            if (score.includes("won")){
                playerScore++;
                return "Won!";
            }   else if (score.includes("lose")) {
                computerScore++;
                return "Lose!";
            }   else {
                return "Draw!";
            }

        }
        console.log(gameScore(score));
        console.log(playerScore);
        console.log(computerScore);

        alert("Score is:\nYOU: "+ playerScore + "\nComputer: " + computerScore)

}

    for (i=0; i>=0; i++) {
        if (playerScore == 5 || computerScore == 5) {
            break;
        }
        play();
    }  

}*/
