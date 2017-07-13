// global variables.
		var attack;
		var defend;
		var attackcharacter;
		var attackerHP;
	    var attackerAP;
	    var attackerCAP;
	    var defendcharacter;
	    var defenderHP;
	    var defenderAP;
	    var defenderCAP;
	    var name;
	    var YourCharacter;
	    var YourDefender;
	    var myChar = "";

function reset() {
	window.gameObj = {
		attackOccurred: false,
		winOccurred: false,
		lossOccurred: false,
		wounded: false,
		gameOver: false,
	};

	characters.ObiWan.healthPoints = 120;
	characters.LukeSky.healthPoints = 100;
	characters.DarSid.healthPoints = 150;
	characters.DarMaul.healthPoints = 180;
};

// array to hold each characters stats.
var characters = { 

	ObiWan: {
			name: "ObiWan",
			visual: 'assets/images/ObiWan.jpg',
			healthPoints: 120,
			attackPower: 8,
			counterAttackPower: 24
			},

	LukeSky:{
			name: "LukeSky",
			visual: 'assets/images/LukeSkywalker.jpg',
			healthPoints: 100,
			attackPower: 10,
			counterAttackPower: 5
			},

	DarSid:{ 
			name: "DarSid",
			visual: 'assets/images/DarthSidious.png',
			healthPoints: 150,
			attackPower: 10,
			counterAttackPower: 20
			},

	DarMaul:{ 
			name: "DarMaul",
			visual: 'assets/images/DarthMaul.png',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 25,
			}
};

	$(document).ready(function(){
		reset();
		
		//writing each characters healthpoints to the html so they show up on the page.
		$(".ob1hp").html(characters.ObiWan.healthPoints);
		$(".lukehp").html(characters.LukeSky.healthPoints);
		$(".darthshp").html(characters.DarSid.healthPoints);
		$(".darthmhp").html(characters.DarMaul.healthPoints);

	// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
	// "Your Character" and moves the other three into "Enemies available to attach".
	$(".firstRow").one('click', function(){
    // $(".firstRow").click(function(){
            
           if (myChar === "") {
	       // clones the chosen character to "Your Character"	       
	       $(this).appendTo("#yourChar");
	       myChar = $(this);
	       YourCharacter = $(myChar).attr("value");
       	   }
	       // if else statements that determine who is currently "Your Character" and assign
	       // that person to the character array's properties. 
	       if (YourCharacter === characters.ObiWan.name) {
	       		attackerHP = characters.ObiWan.healthPoints;
	       		attackerAP = characters.ObiWan.attackPower;
	       		attackerCAP = characters.ObiWan.counterAttackPower;
	       		attack = characters.ObiWan;
	       		console.log(attackerHP);
	       		console.log(attackerAP);
	       		console.log(attackerCAP);
	       }
	       else if (YourCharacter === characters.LukeSky.name){
	       		attackerHP = characters.LukeSky.healthPoints;
	       		attackerAP = characters.LukeSky.attackPower;
	       		attackerCAP = characters.LukeSky.counterAttackPower;
	       		attack = characters.LukeSky;
	       		console.log(attackerHP);
	       		console.log(attackerAP);
	       		console.log(attackerCAP);
	       }
	       else if (YourCharacter === characters.DarSid.name){
	       		attackerHP = characters.DarSid.healthPoints;
	       		attackerAP = characters.DarSid.attackPower;
	       		attackerCAP = characters.DarSid.counterAttackPower;
	       		attack = characters.DarSid;
	       		console.log(attackerHP);
	       		console.log(attackerAP);
	       		console.log(attackerCAP);
	       }
	       else if (YourCharacter === characters.DarMaul.name){
	       		attackerHP = characters.DarMaul.healthPoints;
	       		attackerAP = characters.DarMaul.attackPower;
	       		attackerCAP = characters.DarMaul.counterAttackPower;
	       		attack = characters.DarMaul;
	       		console.log(attackerHP);
	       		console.log(attackerAP);
	       		console.log(attackerCAP);
	       }
	              
	       // clones the three remaining characters to "Enemies available to attack" three separate divs.
	       for (var i = 0; i < 4; i++) {
	       	$("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

	       }
	               
	       // Clears the characters from the top.
	       $("#picRow").empty();
    });

    // When the player clicks on any of the characters in the "enemies available to attack" section, the game 
     // determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
     // characters remain in "enemies available to attack" section.     
     $(".move").click(function(){

     	   	// clones the chosen character to "Defender"
	     	// moves that character to the "Defender" section on the page.
	     	$(this).appendTo("#defender");
	     	var myDef = $(this);
	     	YourDefender = $(myDef).attr("value");


	     	//YourDefender needs to be equal to the clicked character's name. 
	     	//YourDefender = $(event.target).name();

	     	// YourDefender = $(myDef).attr("value");

	     	// assigns var myDef to "this"; which is the character in "Defender"
	     	// var myDef = $(this);
	     	// // setting the "value" of 'this'/myDef (as defined in the div) to the "Your Defender" variable. 
	     	// $(myDef).find


	     	// YourDefender = $(myDef).attr("value");

	     	// if else statements that determine who is currently "Defender" and assign
	       // that person to the character array's properties.
	       if (YourDefender === characters.ObiWan.name) {
	       		defenderHP = characters.ObiWan.healthPoints;
	       		defenderAP = characters.ObiWan.attackPower;
	       		defenderCAP = characters.ObiWan.counterAttackPower;
	       		defend = characters.ObiWan;
	       		console.log(defenderHP);
	       		console.log(defenderAP);
	       		console.log(defenderCAP);
	       	}
	       	else if (YourDefender === characters.LukeSky.name){
	       		defenderHP = characters.LukeSky.healthPoints;
	       		defenderAP = characters.LukeSky.attackPower;
	       		attackerCAP = characters.LukeSky.counterAttackPower;
	       		defenderCAP = characters.LukeSky;
	       		console.log(defenderHP);
	       		console.log(defenderAP);
	       		console.log(defenderCAP);
	       }
	       else if (YourDefender === characters.DarSid.name){
	       		defenderHP = characters.DarSid.healthPoints;
	       		defenderAP = characters.DarSid.attackPower;
	       		defenderCAP = characters.DarSid.counterAttackPower;
	       		defend = characters.DarSid;
	       		console.log(defenderHP);
	       		console.log(defenderAP);
	       		console.log(defenderCAP);
	       }
	       else if (YourDefender === characters.DarMaul.name){
	       		defenderHP = characters.DarMaul.healthPoints;
	       		defenderAP = characters.DarMaul.attackPower;
	       		defenderCAP = characters.DarMaul.counterAttackPower;
	       		defend = characters.DarMaul;
	       		console.log(defenderHP);
	       		console.log(defenderAP);
	       		console.log(defenderCAP);
	       }


     });

    
     // when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
     // property of the "Defender".Their counter attack decreases your health.
     $(".attackButton").click(function(){
     		
     });

     











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