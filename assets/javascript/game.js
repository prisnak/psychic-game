
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v","w","x", "y", "z"];

var guessesLeft = 9;
document.getElementById("guessesLeft").innerText =  guessesLeft;

var wins = 0;
document.getElementById("wins").innerText =  wins;

var loss = 0;
document.getElementById("losses").innerText =  loss;


// letters guessed
var guesses = [];	
function showLetters(event){
	var x = event.key
	// debugger;
	
	if (guesses.indexOf(x) == -1){
		guesses.push(x);
		// debugger;
		document.getElementById("userChoice").innerText = guesses;
		guessesLeft-- ; 
		document.getElementById("guessesLeft").innerText =  guessesLeft;
	}
}
document.onkeydown = showLetters;

// computer choose a random option, count wins, losses,remaining guesses and it reloads the page when the guesses is equal 0

var random = Math.floor(Math.random()*options.length);
var computerOption = options[random];
console.log(computerOption)

function psy(ev){
	
	var userKey = ev.key; 

	if (computerOption == userKey){
		wins ++ ; 
		document.getElementById("wins").innerText =  wins;
		resetGame() 
	} 
	// else{
	// 	// loss ++ ;
	
	// 	guessesLeft -- ; 
	// 	document.getElementById("guessesLeft").innerText =  guessesLeft;
	// }

	if (guessesLeft == 0){ 
		loss++
		document.getElementById("losses").innerText =  loss;
		resetGame();
		// reset function
		// location.reload() 
	}
	
} 

function resetGame() {
	guesses = [];
	random = Math.floor(Math.random()*options.length);
	computerOption = options[random];
	guessesLeft = 9;
	console.log(computerOption)
	document.getElementById("userChoice").innerText = guesses;

}

document.onkeyup = psy; 






