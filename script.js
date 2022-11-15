// Global variables.
let wins = 0;
let loses = 0;
let playerSelection = "";
let gameText = document.querySelector('.gameText');


// Randomly returns either rock, paper, or scissors as the computer's choice.
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() *  choices.length)]
}

/* 
Plays a round of rock, paper, scissors. Follows all standard rules.
Displays the player's selection and computer's selection.
Takes the player's selection and computer's selection as input and returns a statement indicating a win, lose, or tie.
*/

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
                    gameText.innerHTML = 'You trade hits';
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
                    gameText.innerHTML = 'You trade hits';
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
                    gameText.innerHTML = 'You trade hits';
                    break;
            }
            break;
    }
    displayScore();
    checkGame();
    return;
}

/* 
Checks to see if either the player or opponent has reached 3 wins. 
Displays the player's total wins and loses and resets the game.
*/
function checkGame() {
    if (wins >= 3) {
        gameText.innerHTML = 'Congrats! You have successfully defended yourself from the pirates.';
        playAgain();
    } else if (loses >= 3) {
        gameText.innerHTML = 'Your booty is plundered and ship is destoryed. Better luck next time.';
        playAgain();
    }
}

// Displays the score for the game.
function displayScore() {
    document.querySelector('.score').textContent = `${wins} - ${loses}`;
}

// Resets the wins and loses. Calls game() to allow the player to play another game.
function resetGame() {
    gameText.innerHTML = `You look ahead at the looming ship as is gets closer and closer...<br> <br> You prepare the defenses`;
    wins = 0;
    loses = 0;
    displayScore();
}

// Creates a button that allows the player to reset the game if they desire to play it again.
function playAgain() {
    const playAgain = document.createElement('button');
    playAgain.innerHTML = 'Play Again';
    playAgain.setAttribute('style', `font-size: 20px; border: none; border-radius: 20px;
                           padding: 10px 18px; cursor: pointer`);
    playAgain.addEventListener('click', function() {
        resetGame();
        document.body.removeChild(playAgain);
    })
    const choices = document.querySelector('.choices');
    document.body.insertBefore(playAgain, choices);
}


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




