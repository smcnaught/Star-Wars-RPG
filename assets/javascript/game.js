function reset() {
	window.gameObj = {
		attackOccurred: false,
		winOccurred: false,
		lossOccurred: false,
		wounded: false,
		gameOver: false,
	};

	ObiWan.healthPoints = 120;
	LukeSky.healthPoints = 120;
	DarSid.healthPoints = 150;
	DarMaul.healthPoints = 180;
};

// objects to hold each characters stats.
var ObiWan = { 
		name: "Obi-Wan Kenobi",
		visual: 'assets/images/ObiWan.jpg',
		healthPoints: 120,
		attackPower: 8,
		counterAttackPower: 24
};

var LukeSky = {
		name: "Luke Skywalker",
		visual: 'assets/images/LukeSkywalker.jpg',
		healthPoints: 100,
		attackPower: 10,
		counterAttackPower: 5
};

var DarSid = {
		name: "Darth Sideous",
		visual: 'assets/images/DarthSidious.png',
		healthPoints: 150,
		attackPower: 10,
		counterAttackPower: 20
};

var DarMaul = {
		name: "Darth Maul",
		visual: 'assets/images/DarthMaul.png',
		healthPoints: 180,
		attackPower: 12,
		counterAttackPower: 25,
};

// array to hold all my characters. 
var characters = [ObiWan, LukeSky, DarSid, DarMaul];

// attack Constructor to hold the name of the attacker. 
     var attackerConstructor = function(name, healthPoints){
     	this.name = name;
     	this.healthPoints = healthPoints;
     }

// global variables.
		var attackerName = "obi";
		var attackcharacter;



	$(document).ready(function(){
		reset();

		

		$(".ob1hp").html(ObiWan.healthPoints);

	// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
	// "Your Character" and moves the other three into "Enemies available to attach".
    $(".firstRow").click(function(){
             
	       // clones the chosen character to "Your Character"
	       $(this).appendTo("#yourChar");
	       var myChar = $(this);
	       var attacker = $(this).attr("value");
	       console.log(typeof attacker);     


	       // clones the three remaining characters to "Enemies available to attack" three separate divs.
	       for (var i = 0; i < 4; i++) {
	       	$("._" + [i]).not(myChar).clone().appendTo("#enemies" + [i]);

	       }
	               
	       // Clears the characters from the top.
	       $("#picRow").empty();
    });

    // When the player clicks on any of the characters in the "enemies available to attack" section, the game 
     // determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
     // characters remain in "enemies available to attack" section.     
     $(".move").click(function(){

	     	// clones the chosen character to "Defender"
	     	$(this).appendTo("#defender");
	     	var defender = this;
	     	console.log(defender);

     });

     // looping through my "characters" array to figure out who's in the "Your Character" position. 
     for (var i = 0; i < characters.length; i++) {
     	if (attackerName === characters[i].name){
     		attackcharacter = new attackerConstructor(characters[i].name, characters[i].healthPoints);
     		console.log(attackcharacter.name);
     		console.log(attackcharacter.healthPoints);
     	}
     }


     // when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
     // property of the "Defender".Their counter attack decreases your health.
     $(".attackButton").click(function(){
     		
     });

     //link all characrters to html
     // for (var i = 0; i < characters.length; i++) {
     // 	$("#characterContainer").append('<div class = "characters">Name: ' + chracters[i])
     // 	.name + '</div>');
     // }

     // $('body').on('click', '.character', function(event){

     // })










// The goal of the game is to defeat all the enemies by fighting them. 


// The player fights the "defender" by clicking the "attack button".

// "You attacked Luke Skywalker for 8 damage."
// "Luke Skywalker attached you back for 10 damage."

// If you click attack when no one is in the defender spot, the game says "No enemy here".

// The game remembers ever time you attack and slowly increases your attack power. 

// if you beat one enemy, the game says "You have defeated Luke Skywalker, you can choose to fight another enemy"

// if the player hits "attack" when there's no one in the "defender" position, then the game says "No enemy here".

// if you lose, the game says "you've been defeated...GAME OVER!!!" and then "restart" button appears.

// Once you fight and defeat all the enemies, the game tells you (at the bottom of the screen) that, "You Won!!!! GAME OVER!!!" and it adds a "restart" button.


});