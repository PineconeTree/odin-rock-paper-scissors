function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	const choices = ["rock", "paper", "scissors"];

	function getComputerChoice() {
		const randomIndex = Math.floor(Math.random() * 3);
		return choices[randomIndex];
	}

    function getHumanChoice() {
        let choice;
        do {
            choice = prompt("Enter rock, paper, or scissors (or leave blank to quit):");
            if (choice === null || choice.trim() === "") {
                console.log("Game over. You chose to quit.");
                return null;
            }
            choice = choice.toLowerCase();
        } while (!choices.includes(choice));
        return choice;
    }

	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			console.log(`It's a tie! Both chose ${humanChoice}.`);
		} else if (
			(humanChoice === "rock" && computerChoice === "scissors") ||
			(humanChoice === "paper" && computerChoice === "rock") ||
			(humanChoice === "scissors" && computerChoice === "paper")
		) {
			console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
			humanScore++;
		} else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
			computerScore++;
		}
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);

        let humanNewChoice = getHumanChoice();
        if (humanNewChoice === null) return;
        let computerNewChoice = getComputerChoice();
        playRound(humanNewChoice, computerNewChoice);
	}

	const humanSelection = getHumanChoice();
    if (humanSelection === null) return;
	const computerSelection = getComputerChoice();

	playRound(humanSelection, computerSelection);
}

playGame();
