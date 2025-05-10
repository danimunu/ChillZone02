function play(playerChoice) {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
  
    let result = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;
  
    if (playerChoice === computerChoice) {
      result += "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result += "You win!";
    } else {
      result += "You lose!";
    }
  
    document.getElementById("result").innerText = result;
  }