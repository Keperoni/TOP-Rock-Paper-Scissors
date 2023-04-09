// Function to get Computer Choice, being the return of it Rock or Paper or Scissors

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    console.log(computerSelection)

        if (computerSelection === 0) {
            computerSelection = "rock"
        }
        else if (computerSelection === 1) {
            computerSelection = "paper"
        }
        else {
            computerSelection = "scissors"
        }
        console.log(computerSelection)
    return computerSelection;
    }

    function playRound(computerSelection, playerSelection) {
        const winMessage = "You win!";
        const loseMessage = "You lose!";
        const rockWin = "Rock beats Scissors.";
        const paperWin = "Paper beats Rock.";
        const scissorsWin = "Scissors beats Paper.";
        let result = 0;
        // Evaluate who won, and explain why the player won or lost.
        if(computerSelection === "rock" & playerSelection === "scissors") {
            result = loseMessage.concat(" ", rockWin);
        }
        else if(computerSelection === "rock" & playerSelection === "paper") {
            result = winMessage.concat(" ", paperWin);
        }
        else if(computerSelection === "paper" & playerSelection === "rock") {
            result = loseMessage.concat(" ", paperWin);
        }
        else if(computerSelection === "paper" & playerSelection === "scissors") {
            result = winMessage.concat(" ", scissorsWin);
        }
        else if(computerSelection === "scissors" & playerSelection === "rock") {
            result = winMessage.concat(" ", rockWin);
        }
        else if(computerSelection === "scissors" & playerSelection === "paper") {
            result = loseMessage.concat(" ", scissorsWin);
        }
        else result = "Draw!"
        return result;
    }