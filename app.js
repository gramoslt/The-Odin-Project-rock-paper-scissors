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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let difference = choicesPoints[humanChoice] - choicesPoints[computerChoice];
    const resultsContainer = document.querySelector("#results-container");
    let result = document.createElement("h2");

    if (difference == -1 || difference == 2) {
        result.textContent = `You Win!, ${humanChoice} beats ${computerChoice}`;

        humanScore += 1;
    } else if (difference == 0) {
        result.textContent = `It's a Tie!, you both picked ${humanChoice}`;
        humanScore += 1;
        computerScore += 1;
    } else {
        result.textContent = `You Lose!, ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }

    resultsContainer.appendChild(result);
    const scores = document.createElement("h2");
    scores.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    resultsContainer.appendChild(scores);

    if (humanScore === 5 || computerScore === 5) {
        printWinner();
        disableButtons();
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

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

function playGame() {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => {
        playRound("rock");
    });
    paperBtn.addEventListener("click", () => {
        playRound("paper");
    });
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors");
    });
}

playGame();
