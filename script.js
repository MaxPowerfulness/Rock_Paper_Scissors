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
                    loses += 1
                    return lose;
                case 'scissors':
                    wins += 1
                    return win;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    wins += 1
                    return win;
                case 'paper':
                    return tie;
                case 'scissors':
                    loses += 1
                    return lose;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    loses += 1
                    return lose;
                case 'paper':
                    wins += 1
                    return win;
                case 'scissors':
                    return tie;
            }
    }
}

function game() {
    for ( ; wins + loses < 5; ) {
        let playerSelection = prompt("Choose rock, paper, or scisssors");
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log('Wins:', wins)
        console.log('Loses:', loses)
    }
    if (wins > 3) {
        console.log('Congrats! You win!')
        return resetGame()
    } else {
        console.log('You lose. Better luck next time.')
        return resetGame()
    }
    
}

function resetGame() {
    wins = 0
    loses = 0
    console.log(game())
}

let wins = 0
let loses = 0
console.log(game())
