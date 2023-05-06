const rpsInputs = ["rock", "paper", "scissors"]
const rpslsInputs = ["rock", "paper", "scissors", "lizard", "spock"]

export function rps(input){

   if(!rpsInputs.includes(input)){
		console.error(`${input} is out of range.`);
		rulesRPS();
	        helpRPS();
	        return;

	}
    const opponentChoice = rpsInputs[Math.floor(Math.random() * 3)];
  const result = playRps(input, opponentChoice);
  console.log(`Player: ${input}\nOpponent: ${opponentChoice}\nResult: ${result}`);
}

export function playRps(playerChoice = 'rock', opponentChoice){
  if (playerChoice === opponentChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && opponentChoice === "scissors") ||
    (playerChoice === "paper" && opponentChoice === "rock") ||
    (playerChoice === "scissors" && opponentChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }

}


export function rpsls(input1){
   if(!rpslsInputs.includes(input)){
                console.error(`${input} is out of range.`);
                rulesRPSLS();
                helpRPSLS();
                return;
        
        } 

    const opponentChoice = rpslsInputs[Math.floor(Math.random() * 5)];
  const result = playRpsls(input, opponentChoice);
  console.log(`Player: ${input}\nOpponent: ${opponentChoice}\nResult: ${result}`);
}

export function playRpsls(playerChoice = 'rock', opponentChoice){
  if (playerChoice === opponentChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && (opponentChoice === "scissors" || opponentChoice === "lizard")) ||
    (playerChoice === "paper" && (opponentChoice === "rock" || opponentChoice === "spock")) ||
    (playerChoice === "scissors" && (opponentChoice === "paper" || opponentChoice === "lizard")) ||
    (playerChoice === "lizard" && (opponentChoice === "paper" || opponentChoice === "spock")) ||
    (playerChoice === "spock" && (opponentChoice === "rock" || opponentChoice === "scissors"))
  ) {
    return "win";
  } else {
    return "lose";
  }

}

export function rulesRPS() {
  console.log("Here are the rules of the game:");
  console.log("Rock beats Scissors");
  console.log("Scissors beats Paper");
  console.log("Paper beats Rock");
}

export function helpRPS() {
  console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit`);
}

export function helpRPSLS() {
  console.log(`Usage: node-rpsls [SHOT]
    Play Rock Paper Scissors Lizard Spock (RPSLS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit`);
}

export function rulesRPSLS() {
  console.log(`Rules of Rock Paper Scissors Lizard Spock (RPSLS):
    Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock,
    Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock,
    Spock vaporizes rock, and as it always has, rock crushes scissors.`);
}

