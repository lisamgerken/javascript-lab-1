var playing = true;
var userHealth = 40;
var enemyHealth = 10;
var wins = 0;
var name;
var attack;

function startGame() {
	var yesOrNo = prompt("Do you want to play?");
	if(yesOrNo === "yes"){
		name = prompt("What is your player's name?");
		getDamage();
		startCombat();
	} else {
		console.log("Maybe next time");
	}
}

startGame()

function startCombat() {
	while (playing) {
		attack = prompt("Would you like to attack or quit?");
		if (attack === "attack") {
			getDamage();
		}
		if (wins === 3) {
			console.log("You won the game!");
			playing = false;
		}
		if (userHealth <= 0) {
			console.log("Sorry, you lose.")
			playing = false;
		}
		else {
			break;
		}
	}
}
	
function getDamage() {
	userHealth -= Math.floor(Math.random() * 5) + 1;
	enemyHealth -= Math.floor(Math.random() * 5) + 1;
	console.log(name + " you got hit, your health is now " + userHealth + "!");
	console.log("Grant has " + enemyHealth + " health left.");
	if (enemyHealth <= 0 && userHealth > 0) {
		enemyHealth = 10;
		wins ++;
		console.log("You won a battle!") 
	}
}

startGame();



