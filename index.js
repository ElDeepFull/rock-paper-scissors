/*-------------------------------
| PROGRAM: GAME                  |
| NAME : ROCK - PAPER - SCISSORS |
---------------------------------*/

// START THE PROGRAM

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

const game = () => {
    
    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissors");
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ["rock", "paper", "scissors"];

        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const roundLeft = document.querySelector(".roundLeft");
                    if(rounds < 10 ){
                        rounds++;
                        roundLeft.innerText = `Round left: ${10-rounds}`;

                        const choiceNumber = Math.floor(Math.random() * 3);
                        const computerChoice = computerOptions[choiceNumber];
    
                // Check who wins
                winner(this.innerText, computerChoice);
                if(rounds === 10) {
                    gameOver(playerOptions, roundLeft);
                    }
                }
            });
        });
    };
    playGame();
}

// Decide winner
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.playerCount');
    const computerScoreBoard = document.querySelector('.computerCount');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie'
    }else if(player == 'rock'){
        if(computer == 'paper'){
          result.textContent = 'Computer won';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        }else{
           result.textContent = 'Player won'
           playerScore++;
           playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            result.textContent = 'Computer won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'Player won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player === 'paper'){
        if(computer == 'scissors'){
            result.textContent = 'computer won';
            playerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = 'player won';
            computerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

// Game over

const gameOver = (playerOptions, roundLeft) => {
    const chooseRound = document.querySelector('.round');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'non';
    });

    chooseRound.innerText = 'Game over!!';
    roundLeft.style.display = 'non';

    if(playerScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'Good! You won the game';
        result.style.color = '#308D46';
    } else if(playerScore < computerScore) {
        result.style.fontSize = '2rem';
        userShowDiv = document.querySelector('form > div');   
        result.innerText = "Ho no! You lost the game";
        result.style.color = 'red';
    }else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey';
    }
    reloadBtn.innerText = 'Play again';
    reloadBtn.style.display = 'flex';
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    });

    playGame();
}

game();

