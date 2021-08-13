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
	let options = [r, p, s];
	let i = Math.floor(Math.random() * 3 ); //get random number from 0 < 1. so .1, .2, .35, etc. then mult by max #. so .3 * 3 = .9. then floor that: 0. .9 * 3 = 2.7. floor is 2. can't go past the max num
	if (alert(typeof options[i]) === 'string')
		return options[i];
}
