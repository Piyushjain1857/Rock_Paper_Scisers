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
