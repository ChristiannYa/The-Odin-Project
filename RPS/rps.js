// Select the HTML elements using their class or id's
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");

// Global scopes:
let userScore = 0;
let computerScore = 0;
let tie = 0;

// Generate computer choice
const getComputerChoice = () => {
    let generateChoice = Math.floor(Math.random() * 3)

    switch (generateChoice) {
        case 0:
            return 'Rock';
            break;

        case 1:
            return 'Paper';
            break;

        case 2:
            return 'Scissors';
            break;
    }
    return generateChoice;
};

function updateScoreDisplay() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

// Play a round
const playRound = (userChoice, computerChoice) => {
    // Conditionals 
    if (userChoice === computerChoice) { // Conditional to tie
        tie++;
        const p = document.createElement("p");
        p.innerText = `It's a tie! You: ${userChoice}. Computer: ${computerChoice}.`;
        outcome.appendChild(p);

    } else if ((userChoice === 'Rock' && computerChoice === 'Scissors') || (userChoice === 'Paper' && computerChoice === 'Rock') || (userChoice === 'Scissors' && computerChoice === 'Paper')) { // Conditional to win
        userScore++;
        const p = document.createElement("p");
        p.innerText = `You win! You: ${userChoice}. Computer: ${computerChoice}.`;
        outcome.appendChild(p);

    } else { // Conditional to loose
        computerScore++;
        const p = document.createElement("p");
        p.innerText = `You loose! You: ${userChoice}. Computer: ${computerChoice}.`;
        outcome.appendChild(p);
    }
    updateScoreDisplay();
};

// Check who wins
const checkForWinner = (userScore, computerScore) => {
    if (userScore === 5) { // If user wins...
        const h2 = document.createElement("h2");
        h2.classList.add("user-won");
        h2.innerText = `You won! ${userScore} to ${computerScore} You beat the computer!`;
        outcome.append(h2);
        disableButtons();
    }

    if (computerScore === 5) { // If computer wins...
        const h2 = document.createElement("h2");
        h2.classList.add("computer-won");
        h2.innerText = `You lost! ${userScore} to ${computerScore} Computer beats you!`;
        outcome.append(h2);
        disableButtons();
    }
};

// Disable buttons once someone wins
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
};

// Trigger game logic once a button is clicked
rockButton.addEventListener("click", () => {
    if (userScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        const userChoice = 'Rock';
        playRound(userChoice, computerChoice);
        checkForWinner(userScore, computerScore);
    }
});

paperButton.addEventListener("click", () => {
    if (userScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        const userChoice = 'Paper';
        playRound(userChoice, computerChoice);
        checkForWinner(userScore, computerScore);
    }
});

scissorsButton.addEventListener("click", () => {
    if (userScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        const userChoice = 'Scissors';
        playRound(userChoice, computerChoice);
        checkForWinner(userScore, computerScore);
    }
});