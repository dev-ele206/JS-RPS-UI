//variables to iterate for player and computer points and the round
let playerScore = 0;
let computerScore = 0;
let round = 0;

//didn't need to append but instead assigned the functions to the HTML content
document.getElementById("win-message").textContent = 'Fancy a game?';
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

//Chooses rock paper or scisssors at random for computer
computerPlay = () => {
    let computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

//Plays one round, iterates the round counter, assigns points to winner and returns string.
playRound = (playerChoice, computerChoice) => {
    let playerWin = `You win! ${playerChoice} beats ${computerChoice}.`;
    let computerWin = `You lose! ${computerChoice} beats ${playerChoice}.`;
    let gameTie = `It's a draw! You both chose ${playerChoice}.`;
    round++;
    if (playerChoice === computerChoice) {
        return gameTie;
    } else {
        if (playerChoice === 'rock') {
            if (computerChoice !== 'paper') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice !== 'scissors') {
                playerScore++;
                return playerWin;
            } else {
                computerScore++;
                return computerWin;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice !== 'rock') {
                playerScore++;
                return playerWin;

            } else {
                computerScore++;
                return computerWin;
            }
        }
    }
}

//function to let the player know who won after 5 rounds  
game = (player) => {
    if (playerScore < 5 && computerScore < 5) {
        const playerSelection = player
        const computerSelection = computerPlay();
        let roundText = playRound(playerSelection, computerSelection);
        document.getElementById("win-message").textContent = roundText;
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    } else if (playerScore == 5) {
        document.getElementById('win-message').textContent = 'Congrats, you win!';
        document.getElementById('win-message').setAttribute('style', 'color: green;');
    } else if (computerScore == 5) {
        document.getElementById('win-message').textContent = 'You lost! Try again?';
        document.getElementById('win-message').setAttribute('style', 'color: red;');
    }
}

//variable selectors for the HTML buttons
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const resetButton = document.querySelector('#reset-button');

//Event listeners for buttons, each pass their string into the game function 
rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    game('scissors');
});

//reset button to clear the game
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('win-message').setAttribute('style', 'color: black;');
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("win-message").textContent = 'Fancy a game?';

});