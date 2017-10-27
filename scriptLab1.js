var userHealth = 40;
var enemyHealth = 10;
var wins = 0;
var playing = true;
var name = null
	
var playing = prompt("Do you want to play?");
var name = prompt("What is your name?"); 
while (playing === "yes") {
	if (wins === 3) {
		console.log(name + " won the game!");
		break;
	}
	userHealth -= Math.floor(Math.random() * 2) + 1;
	enemyHealth -= Math.floor(Math.random() * 2) + 1; 
	
	console.log(name + " has " + userHealth + " points left.");
	console.log("Grant has " + enemyHealth + " points left.");

	if(enemyHealth <= 0 || userHealth <= 0) {
		wins ++;
		enemyHealth = 10;
	}
}
