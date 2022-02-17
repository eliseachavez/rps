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
gameRound.textContent = "Round: ";
results.appendChild(gameRound);
results.appendChild(compScore);
results.appendChild(playScore);
results.appendChild(banner);

//need a score that is saved to increment, so fetch current number and add to it?or erase and add increment variable from inside? former seems better
rockbutton.addEventListener('click', () => {
	gameRound.textContent = `ROUND ${round}`;
	banner.textContent = "Choose Rock, Paper, or Scissors!";
	if (round < 6){
                let result = playRound(computerPlay(), 'rock');
                if (result === 'Computer wins')
                        cscore++;
                else if (result === 'Player wins')
                        pscore++;
		else if (result === 'tie')
			banner.textContent = "There was a tie. No one wins.";
		round++;
        } else { gameRound.textContent = 'game over.'; }

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
                else if (result === 'tie')
                        banner.textContent = "There was a tie. No one wins.";
                round++;
        } else { gameRound.textContent = 'game over.'; }

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
                else if (result === 'tie')
                        banner.textContent = "There was a tie. No one wins.";
                round++;
        } else { gameRound.textContent = 'game over.'; }

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
//	alert(`computer chose ${c} and you chose ${p}`);
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
	return outcome;
}

/*
function playerSelection() {
	let playerChoice = prompt("Enter your option: rock, paper, or scissors: \n");
	let choice = playerChoice.toLowerCase();
	if (choice === 'scissors' || choice === 'rock' || choice === 'paper') {
		choice = choice.slice(0,1);
		if (choice === 'r' || choice === 'p' || choice === 's') {
			alert(`You chose ${choice}`);
			return choice;
		}
	} else {
		alert('What you typed was an invalid option. Perhaps it was mispelled? Please refresh the page to re-enter your choice.');
	}
}
*/

//let playerChoice = playerSelection();
//let computerChoice = computerPlay();
//let outcome = playRound(computerChoice, playerChoice);

/*
function game() {
	alert('Commencing a match of 5 games against computer! Brace yourself!');
	let cScore = 0;
	let pScore = 0;
	let outcome = '';
	//for (i = 0; i < 5; i++) {
		choice = playRound(playerSelection(), computerPlay());
		if (choice === 'Computer wins')
			cScore++;
		else if (choice === 'Player wins')
			pScore++;
	//}
	if (pScore < cScore)
		alert(`Computer won. score was ${cScore}. Player score was ${pScore}`);
	else
		alert(`Player won. Score was ${pScore}. Computer score was ${cScore}`);
	return;
}
*/
//*******MAIN****************************************************************************
//game();
