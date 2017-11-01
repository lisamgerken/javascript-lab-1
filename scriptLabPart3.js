var character;

var enemy = {
	name: "Grant",
	enemyHealth: 10,
	generateAttackDamage: function() {
		return Math.floor((Math.random() * 3) + 1);
	}
}

function startGame() {
	playing = prompt("Do you want to play?");
	if (playing === "yes") {
		character = {
		wins: 0,
		health: 40,
		healsRemaining: 2,
		name: prompt("What's your name?"),
		generateAttackDamage: function() {
			return Math.floor((Math.random() * 3) + 1 );
			console.log(health);
		},
		heal: function() {
			if (this.healsRemaining === "heal") {
			return this.healsRemaining --;
			}
		character.health += Math.floor((Math.random() * 10) + 1 ); 	
		}
		}
	startCombat()
}
}

function startCombat() {
	while (character.wins < 6) {
		if (character.wins === 5) {
			console.log("You won the game!");
			break;
		}
		var attack = prompt("Would you like to attack, heal, or quit?");
			if (attack === "attack") {
				character.health -= enemy.generateAttackDamage();
				enemy.enemyHealth -= character.generateAttackDamage();
				console.log(character.name + " you've been hit!  Your health is " + character.health);
				console.log("Grant's health is now " + enemy.enemyHealth);
			}
			if (character.heal === "heal") {
				character.health();
				console.log(character.name + " you've been hit!  Your health is " + character.health);
			}
			else if (attack === "quit") {
				console.log("Maybe next time");
				break;
			}
		if (enemy.enemyHealth <= 0) {
			character.wins ++;
			enemy.enemyHealth = 10;
			console.log("You won this battle.");
		}
		if (character.health <= 0) {
			console.log("You lost the game.");
			break;
		}
	}
}
startGame();


	