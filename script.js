function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() *  choices.length)]
}

function playRound(playerSelection, computerSelection) {
    let tie = `Tie game! ${playerSelection} ties with ${computerSelection}`;   
    let win = `You win! ${playerSelection} beats ${computerSelection}`;
    let lose = `You lose! ${playerSelection} loses to ${computerSelection}`;
    playerSelection = playerSelection.toLowerCase();
    console.log('playerSelection:', playerSelection)
    console.log('computerSelection:', computerSelection)
    switch (playerSelection === 'rock') {
        case computerSelection === 'rock':
            console.log('test')
            return tie;
        case computerSelection === 'paper':
            return lose;
        case computerSelection === 'scissors':
            return win;
    }
    switch (playerSelection === 'paper') {
        case computerSelection === 'rock':
            return win;
        case computerSelection === 'paper':
            return tie;
        case computerSelection === 'scissors':
            return lose;
    }
    switch (playerSelection === 'scissors') {
        case computerSelection === 'rock':
            return lose;
        case computerSelection === 'paper':
            return win;
        case computerSelection === 'scissors':
            return tie;
    }
}

console.log(playRound('scissors', 'rock'))