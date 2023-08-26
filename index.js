/*-------------------------------
| PROGRAM: GAME                  |
| NAME : ROCK - PAPER - SCISSORS |
---------------------------------*/

// START THE PROGRAM

let userWins = 0;
let computerWins = 0;
let rounds = 0;

const weapons = ['rock', 'paper', 'scissors'];


// PROGRAM BEHAVIOURS

function getComputerChoice(){
    const randomIndex =  Math.floor(Math.random() * 3);

    return  weapons[randomIndex];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's tie!";
    }else if(
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock')||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ){
        return `You win! ${playerSelection} beat ${computerSelection}.`;
    }else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}

const playerWeapon = 'rock';
const computerWeapon = getComputerChoice();

const result = playRound(playerWeapon, computerWeapon);
console.log(result);

function game() {
    let userWins = 0;
    let computerWins = 0;

    const userName = prompt("Enter your username");
    const loginStatus = `Welcome ${userName}, you are connected`;
    console.log(loginStatus);

    const startGame = prompt("Type 'start' to begin the game:");

    if (startGame.toLowerCase() !== 'start') {
        console.log("Game not started.");
        return;
    }

    for (let round = 1; round <= 5; round++) {
        const playerWeapon = prompt("Enter your weapon (rock, paper, or scissors):").toLowerCase();
        const computerWeapon = getComputerChoice();
        const result = playRound(playerWeapon, computerWeapon);

        console.log(`Round ${round}: ${result}`);

        if (result.includes('win')) {
            userWins++;
        } else if (result.includes('lost')) {
            computerWins++;
        }
    }

    if (userWins > computerWins) {
        console.log('You win the game!');
    } else if (computerWins > userWins) {
        console.log('Computer wins the game!');
    } else {
        console.log('It\'s a tie! The game is a draw.');
    }
}

// Call function game to play the game

game();


