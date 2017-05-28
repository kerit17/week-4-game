$(document).ready(function(){

//create target number between 19-120
	var random = Math.floor(Math.random()*101+19);
	$("#random").text(random);
	console.log("Number to Guess is: " + random);

//generate value for each flower
	var yellow = Math.floor(Math.random()*12+1);
 	$("#yellowGuess").text(yellow);
	console.log("yellow: " + yellow);
	
	var blue = Math.floor(Math.random()*12+1);
	$("#blue").text(blue);
	console.log("blue: " + blue);
	
	var orange = Math.floor(Math.random()*12+1);
 	$("#orangeGuess").text(orange);
	console.log("orange: " + orange);
	
	var purple = Math.floor(Math.random()*12+1);
 	$("#purpleGuess").text(purple);
	console.log("purple: " + purple);

//values for guess total/wins/losses
	var userTotal = 0;
	console.log("User Total: " + userTotal);

//output number of wins
	var wins = 0;
	$("#numberWins").text(wins);
	console.log("wins: " + wins);

//output number of losses
	var losses = 0;
	$("#numberLosses").text(losses);
	console.log("losses: " + losses);

//functions for what happens when win/lose
 	function win() {
 		alert("Winner!");
		wins++;
		$("#numberWins").text(wins);
		console.log("wins: " + wins);
		reset();
	}

	function lose() {
		alert("You lose. Better luck next time!");
			losses++;
			$("#numberLosses").text(losses);
		console.log("losses: " + losses);
		reset();
	}	

//flower on-click functions
$("#yellow").on("click", function(){
	userTotal = userTotal + yellow;
	console.log("New Total = " + userTotal);
	$("#newTotal").text(userTotal);
	if (userTotal == random){
		win();
	}
	else if (userTotal > random) {
		lose();
	}
})

$("#blue").on("click", function(){
	userTotal = userTotal + blue;
	console.log("New Total = " + userTotal);
	$("#newTotal").text(userTotal);
	if (userTotal == random){
		win();
	}
	else if (userTotal > random) {
		lose();
	}
})

$("#orange").on("click", function(){
	userTotal = userTotal + orange;
	console.log("New Total = " + userTotal);
	$("#newTotal").text(userTotal);
	if (userTotal == random){
		win();
	}
	else if (userTotal > random) {
		lose();
	}
})

$("#purple").on("click", function(){
	userTotal = userTotal + purple;
	console.log("New Total = " + userTotal);
	$("#newTotal").text(userTotal);
	if (userTotal == random){
		win();
	}
	else if (userTotal > random) {
		lose();
	}
})

//reset game function
function reset() {
	random = Math.floor(Math.random()*101+19);
	$("#random").text(random);
	console.log("Number to Guess is: " + random);
	userTotal = 0;
	console.log("UserTotal Reset: " + userTotal);	
	$("#newTotal").text(userTotal);
//generate value for each flower
	yellow = Math.floor(Math.random()*12+1);
	console.log("yellow: " + yellow);
	
	blue = Math.floor(Math.random()*12+1);
	console.log("blue: " + blue);
	
	orange = Math.floor(Math.random()*12+1);
	console.log("orange: " + orange);
	
	purple = Math.floor(Math.random()*12+1);
	console.log("purple: " + purple);
	
}


})