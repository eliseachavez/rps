const rockbutton = document.querySelector('#rock');
const paperbutton = document.querySelector('#paper');
const scissorsbutton = document.querySelector('#scissors');
const results = document.querySelector('#results');
const gameRound = document.createElement('p');
const compScore = document.createElement('p');
const playScore = document.createElement('p');
const banner = document.createElement('p');
let cscore = 0;
let pscore = 0;
let round = 1;
banner.textContent = "Choose Rock, Paper, or Scissors!";
compScore.textContent = 'Computer: 0';
playScore.textContent = 'Player: 0';
gameRound.textContent = "ROUND: ";
results.appendChild(gameRound);
results.appendChild(compScore);
results.appendChild(playScore);
results.appendChild(banner);

////////////////////////////////////////////////////////////////////////////////////
rockbutton.addEventListener('click', () => {
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

paperbutton.addEventListener('click', () => {
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

scissorsbutton.addEventListener('click', () => {
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

/*
paperbutton.addEventListener('click', () => {
  let choice = playRound(computerPlay(),'paper');
  results.textContent = `${choice}`;
});

scissorsbutton.addEventListener('click', () => {
  let choice = playRound(computerPlay(),'scissors');
  results.textContent = `${choice}`;
});
*/
//***********FUNCTIONS************************************************************

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
	banner.textContent = `Computer chose ${c},\n you chose ${p}.\n The outcome is: ${outcome}.`;
	return outcome;
}
