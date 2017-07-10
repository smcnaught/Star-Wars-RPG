$(document).ready(function()
{
	var ObiWan = {
		healthPoints: 0,
		attackPower: 0,
		counterAttackPower: 0
	};

	var luke = {
		healthPoints: 0,
		attackPower: 0,
		counterAttackPower: 0
	}

	var darthM = {
		healthPoints: 0,
		attackPower: 0,
		counterAttackPower: 0
	};

	var darthS = {
		healthPoints: 0,
		attackPower: 0,
		counterAttackPower: 0
	};
	
	// When the user clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
	// "Your Character" and moves the other three into "Enemies available to attach".
    $(".col-2").click(function(){
             
       // determines which character has been clicked.
       var index = $ (".col-2").index(this);

       // clones the chosen character to "Your Character"
       $(this).appendTo("#yourChar");

       // clones the three remaining characters to "Enemies available to attack"
       $(".col-2").not(this).clone().appendTo("#enemies");

       // Clears the characters from the top.
       $("#picRow").empty();


    });




 

// then it determines the last three characters that are left in that div and clones, appends to new spot and deletes.





// When the game starts the four characters are at the top.

// The player then picks a character to be. The person they pick moves into "Your Character". 

// The other three plays move into "Enemies available to attack"

// The goal of the game is to defeat all the enemies by fighting them. 

// The player then chooses one of the "enemies available to attack" and that picture moves into the "Defender spot".

// The player then fights them by clicking the "attack button".

// "You attacked Luke Skywalker for 8 damage."
// "Luke Skywalker attached you back for 10 damage."

// If you click attack when no one is in the defender spot, the game says "No enemy here".

// The game remembers ever time you attack and slowly increases your attack power. 

// Once you fight and defeat all the enemies, the game tells you (at the bottom of the screen) that, "You Won!!!! GAME OVER!!!" and it adds a "restart" button.


});