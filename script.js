// Global variables.
let wins = 0;
let loses = 0;
let playerSelection = "";
let gameText = document.querySelector('.gameText');
const choiceButtons = document.querySelectorAll('.choiceButton');
const choiceButton = document.querySelector('.choiceButton');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


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
                    gameText.innerHTML = '<br> <br> You trade hits.';
                    break ;
                case 'paper':
                    gameText.innerHTML = '<br> <br> You got hit! Get ready to retaliate.';
                    loses += 1;
                    break;
                case 'scissors':
                    gameText.innerHTML = "<br> <br> You hit the enemy! Don't let up.";
                    wins += 1;
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    gameText.innerHTML = "<br> <br> You hit the enemy! Don't let up.";
                    wins += 1;
                    break;
                case 'paper':
                    gameText.innerHTML = '<br> <br> You trade hits.';
                    break;
                case 'scissors':
                    gameText.innerHTML = '<br> <br> You got hit! Get ready to retaliate.';    
                    loses += 1;
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    gameText.innerHTML = '<br> <br> You got hit! Get ready to retaliate.';
                    loses += 1;
                    break;
                case 'paper':
                    gameText.innerHTML = "<br> <br> You hit the enemy! Don't let up.";
                    wins += 1;
                    break;
                case 'scissors':
                    gameText.innerHTML = '<br> <br> You trade hits.';
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
        gameText.innerHTML = 'Congrats! You have successfully defended yourself from the pirates. <br>';
        disableButtons();
        playAgain();
    } else if (loses >= 3) {
        gameText.innerHTML = 'Your booty is plundered and ship destoryed. Better luck next time. <br>';
        disableButtons();
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
    playAgain.setAttribute('style', `font-size: 30px; border: 2px solid black; border-radius: 20px;
                           padding: 10px 18px; cursor: pointer; background: #ccccc7`);
    playAgain.addEventListener('click', function() {
        resetGame();
        enableButtons();
        document.body.removeChild(playAgain);
    })
    const choices = document.querySelector('.choices');
    document.body.insertBefore(playAgain, choices);
}

// Disables the rock, paper, and scissors button when the game is over.
function disableButtons() {
    choiceButtons.forEach((choice) => {
        choice.setAttribute('style', 'pointer-events: none;');
    });
};

// Enables the rock, paper, and scissors button when the game is reset.
function enableButtons() {
    choiceButtons.forEach((choice) => {
        choice.setAttribute('style', 'pointer-events: auto;');
    });
}

// Removes the indication of clicking a button
function removeTransition(i) {
    if (i.propertyName !== 'transform') return; // skips it if it is not a transform
    this.classList.remove('clicked')
}

// Global DOM manipulation

// Runs a round of rock paper scissors with the user's input as the selected icon. 
rock.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'rock';
    document.querySelector('.choiceButton.r').classList.add('clicked'); // Adds indication of button being clicked.
    playRound(playerSelection, getComputerChoice())
    });
paper.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'paper';
    document.querySelector('.choiceButton.p').classList.add('clicked'); // Adds indication of button being clicked.
    playRound(playerSelection, getComputerChoice())
    });
scissors.addEventListener('click', function() {
    playerSelection = "";
    playerSelection += 'scissors';
    document.querySelector('.choiceButton.s').classList.add('clicked'); // Adds indication of button being clicked.
    playRound(playerSelection, getComputerChoice())
    });

// For removing button clicking indicator
choiceButtons.forEach(button => button.addEventListener('transitionend', removeTransition));


