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

function game() {

    let playerScore = 0;
    let computerScore = 0;

    function play() {

    const playerInput = prompt("Choose rock, paper or scissors.");
    const playerSelection = playerInput.toLowerCase();
    const computerSelection = computerPlay();

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

        console.log(playRound(playerSelection, computerSelection))

        let score = playRound(playerSelection, computerSelection)

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

}


