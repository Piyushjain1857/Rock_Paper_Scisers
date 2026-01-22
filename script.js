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
        userChoiceDisplay.textContent = userChoice;
        computerChoiceDisplay.textContent = computerChoice;
        getResult(userChoice, computerChoice);
    });
});

function getResult(user, computer) {
    if (user === computer) {
        resultText.textContent = "It's a Draw 🤝";
        resultText.style.color = "#ffcc33";