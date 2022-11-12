// Randomly returns either rock, paper, or scissors as the computer's choice.
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() *  choices.length)]
}

// Plays a round of rock, paper, scissors. Follows all standard rules.
// Displays the player's selection and computer's selection.
// Takes the player's selection and computer's selection as input and returns a statement indicating a win, lose, or tie.
function playRound(playerSelection, computerSelection) {
    let tie = `Tie game! ${playerSelection} ties with ${computerSelection}`;   
    let win = `You win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${playerSelection} loses to ${computerSelection}`;
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player's Selection:`, playerSelection)
    console.log(`Computer's Selection:`, computerSelection)
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    break ;
                case 'paper':
                    loses += 1;
                    break;
                case 'scissors':
                    wins += 1;
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    wins += 1;
                    break;
                case 'paper':
                    break;
                case 'scissors':
                    loses += 1;
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    loses += 1;
                    break;
                case 'paper':
                    wins += 1;
                    break;
                case 'scissors':
                    break;
            }
            break;
    }
    displayScore();
    checkGame();
    return;
}

// Checks to see if either the player or opponent has reached 3 wins. 
// Displays the player's total wins and loses and resets the game.
function checkGame() {
    if (wins >= 3) {
        alert(`Wins: ${wins} 
Loses: ${loses}
Congrats! You win!`);
        resetGame();
    } else if (loses >= 3) {
        alert(`Wins: ${wins} 
Loses: ${loses}
You lose. Better luck next time.`);
        resetGame();
    }
}

// Displays the score for the game.
function displayScore() {
    document.querySelector('.score').textContent = `${wins} - ${loses}`;
}

// Resets the wins and loses. Calls game() to allow the player to play another game.
function resetGame() {
    wins = 0;
    loses = 0;
    displayScore();
}

// Global variables.
let wins = 0;
let loses = 0;
let playerSelection = ""


// DOM manupulation

// eventListeners for icons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
rock.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'rock';
    playRound(playerSelection, getComputerChoice())
    });
paper.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'paper';
    playRound(playerSelection, getComputerChoice())
    });
scissors.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'scissors';
    playRound(playerSelection, getComputerChoice())
    });




