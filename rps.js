const rockbutton = document.querySelector('#rock');
const paperbutton = document.querySelector('#paper');
const scissorsbutton = document.querySelector('#scissors');


//***********FUNCTIONS************************************************************

function computerPlay() {
	let options = ['r', 'p', 's'];

	let i = Math.floor(Math.random() * 3 ); //get random number from 0 < 1. so .1, .2, .35, etc. then mult by max #. so .3 * 3 = .9. then floor that: 0. .9 * 3 = 2.7. floor is 2. can't go past the max num
	if (typeof (options[i]) === 'string') {
		alert(`Computer chose ${options[i]}`);
		return options[i];
	}
}

function playRound(c, p) {
	let outcome;
	if (c === p)
		outcome = 'tie';
	else if (c === 'r' && p === 'p')
		outcome = "Player wins";
	else if (c === 'r' && p === 's')
		outcome = "Computer wins";
	else if (c === 's' && p === 'p')
		outcome = "Computer wins";
	else if (p === 'r' && c === 'p')
		outcome = "Computer wins";
	else if (p === 'r' && c === 's')
		outcome = "Player wins";
	else if (p === 's' && c === 'p')
		outcome = "Player wins";
	//just realized this is better as a switch statement
	alert(`The outcome of this match is: ${outcome}`);
	return outcome;
}

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

let playerChoice = playerSelection();
let computerChoice = computerPlay();

let outcome = playRound(computerChoice, playerChoice);

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

//*******MAIN****************************************************************************
game();
