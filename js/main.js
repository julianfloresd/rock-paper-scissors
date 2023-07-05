let userScore = 0;
let cpuScore = 0;
let roundCounter = 0;
const userOptions = document.querySelectorAll('.playerSide > i')
document.querySelector('#cpuScore').textContent = cpuScore
document.querySelector('#userScore').textContent = userScore
userOptions.forEach(option => option.addEventListener('click', function (e) {
    playerChoice = playerSelection(e);
    cpuChoice = getComputerChoice();
    roundKeeping(playerChoice,cpuChoice);
    game();
}));
    

function getComputerChoice() {
    cpuSelectionValue = Math.ceil(Math.random()*3)
    if (cpuSelectionValue == 1) {
        cpuChoice = "ROCK"
    } else if (cpuSelectionValue == 2) {
        cpuChoice = "PAPER"
    } else {
        cpuChoice = "SCISSORS"
    }
    console.log(`CPU chose ${cpuChoice}`);
    return cpuChoice
}


function playerSelection (e) {
    let playerChoice = 0;
    if (e.target.classList[1] == "fa-hand-back-fist") {
        playerChoice = "ROCK"
    } else if (e.target.classList[1] == "fa-hand") {
        playerChoice = "PAPER"
    } else if (e.target.classList[1] == "fa-hand-scissors") {
        playerChoice = "SCISSORS"
    }
    console.log(`You chose ${playerChoice}`); 
    return playerChoice
}


function roundKeeping (roundPlayer, roundCpu) {
    const userRound = document.createElement('i');
    const cpuRound = document.createElement('i');
    if (roundPlayer == "ROCK") {
        userRound.className += "fa-regular fa-hand-back-fist"
    } else if (roundPlayer == "PAPER") {
        userRound.className += "fa-regular fa-hand"
    } else if (roundPlayer == "SCISSORS") {
        userRound.className += "fa-regular fa-hand-scissors"
    }
    if (roundCpu == "ROCK") {
        cpuRound.className += "fa-solid fa-hand-back-fist"
    } else if (roundCpu == "PAPER") {
        cpuRound.className += "fa-solid fa-hand"
    } else if (roundCpu == "SCISSORS") {
        cpuRound.className += "fa-solid fa-hand-scissors"
    }
    roundCounter++;
    document.querySelector('aside').innerText += `\n ${roundCounter} `
    document.querySelector("#recordKeep").appendChild(userRound);
    document.querySelector('aside').lastElementChild.after(" - ")
    document.querySelector("#recordKeep").append(cpuRound);
}


function playRound() {
    if ((playerChoice == "ROCK") || (playerChoice == "PAPER") || (playerChoice == "SCISSORS")) {
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
    }
}


function game() {

    let result = playRound();
    if (result == 1) {
        console.log(`Current score is ${userScore} - ${cpuScore}`)
    } else if (result == 2) {
        cpuScore += 1;
        console.log(`Current score is ${userScore} - ${cpuScore}`)
        document.querySelector('#cpuScore').textContent = cpuScore
    } else {
        userScore += 1;
        console.log(`Current score is ${userScore} - ${cpuScore}`)
        document.querySelector('#userScore').textContent = userScore
    }
    if (userScore === 5 ) {
        console.log(`Congratulations. You won the set!!`)
        userScore = 0;
        cpuScore = 0;
        roundCounter = 0;
        document.querySelector('#userScore').textContent = userScore
        document.querySelector('#cpuScore').textContent = cpuScore
        document.querySelector('aside').innerText = `-Record:`
        document.querySelector('.outputMessage').classList = ""
        document.querySelector('.outputMessage').classList.add("win")
        document.querySelector('.outputMessage').innerHTML = `Congratulations. You won the set!! <i class="fa-solid fa-thumbs-up win"></i>`
    } else if (cpuScore === 5 ) {
        console.log(`You lost... Better luck next time.`);
        userScore = 0;
        cpuScore = 0;
        roundCounter = 0;
        document.querySelector('#userScore').textContent = userScore
        document.querySelector('#cpuScore').textContent = cpuScore
        document.querySelector('aside').innerText = `-Record:`
        document.querySelector('.outputMessage').classList = ""
        document.querySelector('.outputMessage').classList.add("lose")
        document.querySelector('.outputMessage').innerHTML = `You lost... Better luck next time. <i class="fa-solid fa-thumbs-down lose"></i>`
    }
}