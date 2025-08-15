let humanScore = 0;
let computerScore = 0;

let choicesPoints = {
    rock: 1,
    scissors: 2,
    paper: 3,
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    let difference = choicesPoints[humanChoice] - choicesPoints[computerChoice];

    if (difference == -1 || difference == 2) {
        console.log(`You Win!, ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (difference == 0) {
        console.log(`It's a Tie!, you both picked ${humanChoice}`);
        humanScore += 1;
        computerScore += 1;
    } else {
        console.log(`You Lose!, ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

function printWinner() {
    if (humanScore == computerScore) {
        console.log(
            `Game Over! It's a Tie! Your Score: ${humanScore} Computer Score: ${computerScore}`
        );
    } else if (humanScore > computerScore) {
        console.log(
            `Game Over! You Win! Your Score: ${humanScore} Computer Score: ${computerScore}`
        );
    } else {
        console.log(
            `Game Over! You Lose! Your Score: ${humanScore} Computer Score: ${computerScore}`
        );
    }
}

function playGame() {
    let roundsPlayed = 0;
    let humanChoice, computerChoice;

    while (roundsPlayed < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        roundsPlayed += 1;
    }

    printWinner();
}

playGame();
