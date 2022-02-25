//Select Divs
const roundDiv = document.querySelector('#rounddiv');
const bannerDiv = document.querySelector('#banner');
const rockdiv = document.querySelector('#rockdiv');
const paperdiv = document.querySelector('#paperdiv');
const scissorsDiv = document.querySelector('#scissorsdiv');
const cscoreDiv = document.querySelector('#cscore');
const pscoreDiv = document.querySelector('#pscore');
const restartDiv = document.querySelector('#restart');

//Select Buttons
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const restartButton = document.querySelector('#restart');

//Create Elements
const gameRound = document.createElement('p'); //append to roundDiv later
const compScore = document.createElement('p'); //append to cscoreDiv later
const playScore = document.createElement('p'); //append to scoreDiv later
const banner = document.createElement('p'); //append to bannerDiv later

//Global Variables
let cscore = 0;
let pscore = 0;
let round = 1;

//Initalize values of newly created elements
banner.textContent = "Choose Rock, Paper, or Scissors!";
compScore.textContent = 'Computer: 0';
playScore.textContent = 'Player: 0';
gameRound.textContent = "ROUND: ";

//Need to append each newly created element to the corresponding div
roundDiv.appendChild(gameRound);
cscoreDiv.appendChild(compScore);
pscoreDiv.appendChild(playScore);
bannerDiv.appendChild(banner);

//***Event Listeners**********************************
//////////////////////////////////////////////////////
restartButton.addEventListener('click', () => {
	document.location.reload(true);
});
rockButton.addEventListener('click', () => {
	gameRound.textContent = `ROUND: ${round}`;
	banner.textContent = "Choose Rock, Paper, or Scissors!";
	if (round < 6){
                let result = playRound(computerPlay(), 'rock');
                if (result === 'Computer wins')
                        cscore++;
                else if (result === 'Player wins')
                        pscore++;
		round++;
        } else { gameRound.textContent = 'GAME OVER'; }

        if (cscore > pscore) {
        	compScore.textContent = `Computer: ${cscore}`;
	} else {
		playScore.textContent = `Player: ${pscore}`;
	}
});

paperButton.addEventListener('click', () => {
        gameRound.textContent = `ROUND ${round}`;
        banner.textContent = "Choose Rock, Paper, or Scissors!";
        if (round < 6){
                let result = playRound(computerPlay(), 'paper');
                if (result === 'Computer wins')
                        cscore++;
                else if (result === 'Player wins')
                        pscore++;
                round++;
        } else { gameRound.textContent = 'GAME OVER'; }

        if (cscore > pscore) {
                compScore.textContent = `Computer: ${cscore}`;
        } else {
                playScore.textContent = `Player: ${pscore}`;
        }
});

scissorsButton.addEventListener('click', () => {
        gameRound.textContent = `ROUND ${round}`;
        banner.textContent = "Choose Rock, Paper, or Scissors!";
        if (round < 6){
                let result = playRound(computerPlay(), 'scissors');
                if (result === 'Computer wins')
                        cscore++;
                else if (result === 'Player wins')
                        pscore++;
                round++;
        } else { gameRound.textContent = 'GAME OVER'; }

        if (cscore > pscore) {
                compScore.textContent = `Computer: ${cscore}`;
        } else {
                playScore.textContent = `Player: ${pscore}`;
        }
});

//*******Functions*************************************
//////////////////////////////////////////////////////

function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];

	let i = Math.floor(Math.random() * 3 ); //get random number from 0 < 1. so .1, .2, .35, etc. then mult by max #. so .3 * 3 = .9. then floor that: 0. .9 * 3 = 2.7. floor is 2. can't go past the max num
	if (typeof (options[i]) === 'string') {
		return options[i];
	}
}

function playRound(c, p) {
	let outcome;
	if (c === p)
		outcome = 'tie';
	else if (c === 'rock' && p === 'paper')
		outcome = "Player wins";
	else if (c === 'rock' && p === 'scissors')
		outcome = "Computer wins";
	else if (c === 'scissors' && p === 'paper')
		outcome = "Computer wins";
	else if (p === 'rock' && c === 'paper')
		outcome = "Computer wins";
	else if (p === 'rock' && c === 'scissors')
		outcome = "Player wins";
	else if (p === 'scissors' && c === 'paper')
		outcome = "Player wins";

	//just realized this is better as a switch statement
	banner.textContent = `Computer chose ${c} 
	Player chose ${p}
	The outcome is: ${outcome}.`;
	return outcome;
}
