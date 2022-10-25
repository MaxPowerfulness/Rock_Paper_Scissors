function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() *  choices.length)]
}

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
                    return tie;
                case 'paper':
                    return lose;
                case 'scissors':
                    return win;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return win;
                case 'paper':
                    return tie;
                case 'scissors':
                    return lose;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return lose;
                case 'paper':
                    return win;
                case 'scissors':
                    return tie;
            }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper, or scisssors");
        console.log(playRound(playerSelection, getComputerChoice()));


    }
}

console.log(game())
