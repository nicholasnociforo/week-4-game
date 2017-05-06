
var playerAddedScore = 0;
var wins = 0;
var losses = 0;
var jupiterNumber = Math.floor(Math.random()*12)+1;
var saturnNumber = Math.floor(Math.random()*12)+1;
var marsNumber = Math.floor(Math.random()*12)+1;
var earthNumber = Math.floor(Math.random()*12)+1;

var numberToGuess = Math.floor(Math.random()*120)+19
console.log(numberToGuess);
var numberToMatchDiv = $("<div>")
numberToMatchDiv.html(numberToGuess);
$("#numberToMatch").html(numberToMatchDiv);







var playerWinsDiv = $("<div>");
playerWinsDiv.html(wins);
$("#wins").html(playerWinsDiv)

var playerLossDiv = $("<div>");
playerLossDiv.html(losses);
$("#losses").html(playerLossDiv)




$("#jupiter").on("click", function(){
console.log(jupiterNumber);
playerAddedScore += jupiterNumber 
var totalScoreDiv = $("<div>");
totalScoreDiv.html(playerAddedScore);
$("#playersTotalScore").html(totalScoreDiv);
console.log(playerAddedScore);

if (playerAddedScore === numberToGuess) {
	winning();
	reset();
	
} if (playerAddedScore > numberToGuess)  {
	$("#gameStatus").html("you lose");
	losing();
	reset();
	

} else {
	console.log("keep going");
};

});


$("#saturn").on("click", function(){	
console.log(saturnNumber);
playerAddedScore += saturnNumber 
var totalScoreDiv = $("<div>");
totalScoreDiv.html(playerAddedScore);
$("#playersTotalScore").html(totalScoreDiv);
console.log(playerAddedScore);

if (playerAddedScore === numberToGuess) {
	winning();
	reset();


} else if (playerAddedScore > numberToGuess)  {
	$("#gameStatus").html("you lose");
	losing();
	reset();


	
} else {
	console.log("keep going");
};


});



$("#mars").on("click", function(){	
console.log(marsNumber);
playerAddedScore += marsNumber 
var totalScoreDiv = $("<div>");
totalScoreDiv.html(playerAddedScore);
$("#playersTotalScore").html(totalScoreDiv);
console.log(playerAddedScore);

if (playerAddedScore === numberToGuess) {
	winning();
	reset();

	


} else if (playerAddedScore > numberToGuess)  {
	losing();
	reset();
	
	

} else {
	console.log("keep going");
};

}),



$("#earth").on("click", function(){	
console.log(earthNumber);
playerAddedScore += earthNumber 
var totalScoreDiv = $("<div>");
totalScoreDiv.html(playerAddedScore);
$("#playersTotalScore").html(totalScoreDiv);
console.log(playerAddedScore);

if (playerAddedScore === numberToGuess) {
	winning();
	reset();
	

} else if (playerAddedScore > numberToGuess)  {
	$("#gameStatus").html("you lose");
	losing();
	reset();
	

} else {
	console.log("keep going");
};


});





reset = function () {
		
		jupiterNumber = Math.floor(Math.random()*12)+1;
		console.log(jupiterNumber);
		saturnNumber = Math.floor(Math.random()*12)+1;
		console.log(saturnNumber);
		marsNumber = Math.floor(Math.random()*12)+1;
		console.log(marsNumber);
		earthNumber = Math.floor(Math.random()*12)+1;
		console.log(earthNumber);
	
	numberToGuess = Math.floor(Math.random()*120)+19;
	numberToMatchDiv = $("<div>");
	numberToMatchDiv.html(numberToGuess);
	$("#numberToMatch").html(numberToMatchDiv);

	
	 playerAddedScore = 0;


	
	var totalScoreDiv = $("<div>");
	totalScoreDiv.html(playerAddedScore);
	$("#playersTotalScore").html(totalScoreDiv);


};

winning = function () {
	var gameStatusDiv= $("<div>")
	gameStatusDiv.html("You Win!")
	$("#gameStatus").html(gameStatusDiv);
	wins ++;
	console.log(wins);
	var playerWinsDiv = $("<div>");
	playerWinsDiv.html(wins);
	$("#wins").html(playerWinsDiv);
	

};

losing = function (){
	var gameStatusDiv= $("<div>")
	gameStatusDiv.html("You Lose!")
	$("#gameStatus").html(gameStatusDiv);
	losses ++;
	console.log(losses);
	var playerLossDiv = $("<div>");
	playerLossDiv.html(losses);
	$("#losses").html(playerLossDiv);
	


};