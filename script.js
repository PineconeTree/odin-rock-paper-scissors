function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	const choices = ["rock", "paper", "scissors"];

	const rockButton = document.getElementById("rock");
	const paperButton = document.getElementById("paper");
	const scissorsButton = document.getElementById("scissors");

	const humanDisplayScore = document.getElementById("user-score");
	const computerDisplayScore = document.getElementById("computer-score");
	const result = document.getElementById("result");

	humanDisplayScore.textContent = humanScore;
	computerDisplayScore.textContent = computerScore;

	function getComputerChoice() {
		const randomIndex = Math.floor(Math.random() * 3);
		return choices[randomIndex];
	}

	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			result.textContent = "It's a tie!";
		} else if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
			humanScore++;
			humanDisplayScore.textContent = humanScore;
		} else {
			result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
			computerScore++;
			computerDisplayScore.textContent = computerScore;
		}
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);

		if (humanScore === 5) {
			result.textContent = "You win the game!";
			playGame();
		} else if (computerScore === 5) {
			result.textContent = "Computer wins the game!";
			playGame();
		}
	}

	document.getElementById("rock").addEventListener("click", () => {
		playRound("rock", getComputerChoice());
	});
	
	document.getElementById("paper").addEventListener("click", () => {
		playRound("paper", getComputerChoice());
	});
	
	document.getElementById("scissors").addEventListener("click", () => {
		playRound("scissors", getComputerChoice());
	});
}

playGame();
