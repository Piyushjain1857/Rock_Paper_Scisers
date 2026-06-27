const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result-text");
const resetBtn = document.getElementById("reset");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

const options = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("data-choice");
        const computerChoice = options[Math.floor(Math.random() * 3)];
        
        // Use emoji icons for display
        const icons = { rock: '🪨', paper: '📄', scissors: '✂️' };
        
        // Remove animation class to restart it
        userChoiceDisplay.parentElement.classList.remove('pop-in');
        computerChoiceDisplay.parentElement.classList.remove('pop-in');
        
        // Force reflow
        void userChoiceDisplay.parentElement.offsetWidth;
        
        // Update content
        userChoiceDisplay.textContent = icons[userChoice] || userChoice;
        computerChoiceDisplay.textContent = icons[computerChoice] || computerChoice;
        
        // Add animation class
        userChoiceDisplay.parentElement.classList.add('pop-in');
        computerChoiceDisplay.parentElement.classList.add('pop-in');
        
        getResult(userChoice, computerChoice);
    });
});

function getResult(user, computer) {
    if (user === computer) {
        resultText.textContent = "It's a Draw 🤝";
        resultText.style.color = "var(--warning)";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        userScore++;
        resultText.textContent = "You Win 🎉";
        resultText.style.color = "var(--success)";
    } else {
        computerScore++;
        resultText.textContent = "You Lose 😢";
        resultText.style.color = "var(--danger)";
    }
    updateScores();
}

function updateScores() {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    updateScores();
    
    // Remove pop-in class
    userChoiceDisplay.parentElement.classList.remove('pop-in');
    computerChoiceDisplay.parentElement.classList.remove('pop-in');
    
    userChoiceDisplay.textContent = '❔';
    computerChoiceDisplay.textContent = '❔';
    resultText.textContent = "Let's Play!";
    resultText.style.color = "var(--primary-glow)";
});