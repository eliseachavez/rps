/*
 * RULES:
 * played from the console.
 * function 1: play against computer: make a computerPlay fxn, that randomly returns r, p, or s. validate that it gives the expected output!
 * function 2: call it playRound(). plays a round of rps. has two parameters: playerSelection and computerSelection. return a string with either "you win!", "you lose! paper beats rock", or "it's a draw"
 *		make the playerSelection parameter case insensitive
 *console.log() the results to see if things were returned correctly. e.g. console.log(play(computerSelection, playerSelection));
 * function 3: call it game(). make it call the playRound() fxn, but it plays 5 times in a row and keeps score. reports winner or loser at the end.
 * use console.log() again to show the winners
 * use prompt() to get input from user
 * feel free to create helper fxns that do something. remember, a fxn should do ONE thing. the name should describe that one thing it does so fxn doesn't need a description
 *
 *PSEUDOCODE
 *
 * computerPlay()
 * if r && p, p wins
 * if r && s, r wins
 * if s && p, s wins
 * If same (playerSelection === computerSelection) then tie
 *
 * playRound()
 *
 * game()
 *
 *
 */


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
	for (i = 0; i < 5; i++) {
		choice = playRound(playerSelection(), computerPlay());
		if (choice === 'Computer wins')
			cScore++;
		else if (choice === 'Player wins')
			pScore++;
	}
	if (pScore < cScore)
		alert(`Computer won. score was ${cScore}. Player score was ${pScore}`);
	else
		alert(`Player won. Score was ${pScore}. Computer score was ${cScore}`);
	return;
}

game();
