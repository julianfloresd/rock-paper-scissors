function getComputerChoice() {
    cpuSelectionValue = Math.ceil(Math.random()*3)
    if (cpuSelectionValue == 1) {
        return cpuChoice = "ROCK"
    } else if (cpuSelectionValue == 2) {
        return cpuChoice = "PAPER"
    } else {
        return cpuChoice = "SCISSORS"
    }
}


function game() {
    const numberOfRounds = 5;
    let userScore = 0;
    let cpuScore = 0;
    for (i=1; i <= numberOfRounds; i++){
        let result = playRound();
        if (result == 1) {
            userScore += 0;
            console.log(`Current score is ${userScore} - ${cpuScore}`)
        } else if (result == 2) {
            cpuScore += 1;
            console.log(`Current score is ${userScore} - ${cpuScore}`)
        } else {
            userScore += 1;
            console.log(`Current score is ${userScore} - ${cpuScore}`)
        }
    }


    function playRound(playerSelection, cpuSelection) {
        const playerChoice = prompt("Rock, Paper or Scissors?").toUpperCase()
        if ((playerChoice == "ROCK") || (playerChoice == "PAPER") || (playerChoice == "SCISSORS")) {
            console.log(`You chose ${playerChoice}`);
            const cpuChoice = getComputerChoice();
            console.log(`CPU chose ${cpuChoice}`);
            if (playerChoice === cpuChoice) {
                console.log(`It's a tie. You both selected ${playerChoice}`)
                return result = 1
            } else if ((playerChoice == "ROCK" && cpuChoice == "PAPER") || (playerChoice == "PAPER" && cpuChoice == "SCISSORS") || (playerChoice == "SCISSORS" && cpuChoice == "ROCK")) {
                console.log(`You lose. ${cpuChoice} beats ${playerChoice}.`)
                return result = 2
            } else if ((cpuChoice == "ROCK" && playerChoice == "PAPER") || (cpuChoice == "PAPER" && playerChoice == "SCISSORS") || (cpuChoice == "SCISSORS" && playerChoice == "ROCK")){
                console.log(`YOU WIN! ${playerChoice} BEATS ${cpuChoice}!!`)
                return result = 3 
            }
            console.log(result)
        } else {
            alert("Type your choice correctly. (case-insensitive)")
            return 0
        }
    }
}