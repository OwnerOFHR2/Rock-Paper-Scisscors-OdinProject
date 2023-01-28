

function getComputerChoice (){
    const options = ['rock','paper', 'scissors'];
    let optionsIndex = Math.floor(Math.random() * options.length); 

    return options[optionsIndex];
}

console.log('Starting Process..')
console.log('Who will win more? Human VS CPU')

let roundsPlayed = 0;
let playerWin = 0;
let playerLose = 0;
let playerTie = 0;


function playRound(){
    let computerSelection = getComputerChoice();
    let roughResult = window.prompt('Choose One, Rock - Paper - Scissors', '');
    let playerSelection= roughResult.toLowerCase();
    let result = '';

    if (playerSelection == computerSelection) {
        result = 'Tied! Both Of You Choose ' + playerSelection;
        roundsPlayed += 1; 
        console.log(roundsPlayed);
        playerTie += 1;
    }
    else if (playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='scissors' && computerSelection=='paper' || playerSelection=='paper' && computerSelection=='rock'){
        result= 'You Won! ' + playerSelection + ' beats ' + computerSelection;
        roundsPlayed += 1; 
        console.log(roundsPlayed);
        playerWin += 1;
    }
    else if (playerSelection=='scissors' && computerSelection=='rock' || playerSelection=='paper' && computerSelection=='scissors' || playerSelection=='rock' && computerSelection=='paper'){
        result= 'You Lost.. ' + computerSelection + ' beats ' + playerSelection;
        roundsPlayed += 1; 
        console.log(roundsPlayed);
        playerLose += 1;
    }
    else {
        result='Please Choose One Of The CORRECT Following Choices which are --- Rock - Paper - Scissors (TRY AGAIN)'
    }

    console.log(result);

    document.getElementById("WinDisplay").innerHTML ='You Have Won: ' +  playerWin;
    document.getElementById("TieDisplay").innerHTML = 'You Have Tied: ' + playerTie;
    document.getElementById("LoseDisplay").innerHTML = 'You Have Lost: ' + playerLose;
}



function game(){
    if (roundsPlayed == 5) {
        console.log('You Played 5 Times. Reload to Play More')
        console.log('Won: ' + playerWin + ' - Tied: ' + playerTie + ' - Lost: ' + playerLose);

    }
    else {
        playRound();
    }
}



function reloadPage(){
    location.reload();
}