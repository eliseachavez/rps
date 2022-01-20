const rockbutton = document.querySelector('#rock');
const paperbutton = document.querySelector('#paper');
const scissorsbutton = document.querySelector('#scissors');


rockbutton.addEventListener('click', () => {
  let choice = playRound(computerPlay(),'rock');
  alert(`${choice}`);
});

paperbutton.addEventListener('click', () => {
  let choice = playRound(computerPlay(),'paper');
  alert(`${choice}`);
});

scissorsbutton.addEventListener('click', () => {
  let choice = playRound(computerPlay(),'scissors');
  alert(`${choice}`);
});

//***********FUNCTIONS************************************************************

function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];

	let i = Math.floor(Math.random() * 3 ); //get random number from 0 < 1. so .1, .2, .35, etc. then mult by max #. so .3 * 3 = .9. then floor that: 0. .9 * 3 = 2.7. floor is 2. can't go past the max num
	if (typeof (options[i]) === 'string') {
		return options[i];
	}
}

function playRound(c, p) {
	alert(`computer chose ${c} and you chose ${p}`);
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
