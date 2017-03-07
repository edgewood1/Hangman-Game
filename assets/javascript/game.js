var wins=0;
var losses=0;
// 1. SELECT THE WORD TO BE GUESSED ("WORD")
function restart() {


	//select word
	var theme;
	var wordbank;
	var wordbank1=["anchovies", "salads", "bacon", "beans", "oranges", "breadfruit", "brownies", "cream", "caviar"];
	var hintbank1=["..of the sea", "..greens", ".. a meat", ".. a veggie", ".. a fruit", ".. a baked good", ".. a baked good", ".. a dairy", ".. a delicacy"];
	var wordbank2=['europe', 'spain', 'bulgaria', 'burundi', 'chile', 'china', 'congo', 'afghanisan', 'herzegovina'];
	var hintbank2=['.. a region', ".. water on some sides", "..eastern europe", "..east africa", "..south america", "..africa", ".asia", "..eastern europe"]
	var display1=document.querySelector("#display1");
	var display2=document.querySelector("#display2");
	var display3=document.querySelector("#display3");
	display2.innerHTML=" Pick a theme: " + "</br> </br>" 
	display3.innerHTML= "1.Food " +" </br> </br>" + "2.Geography" + "</br> </br>";
	
	document.onkeyup = function(event) {
		theme = event.key;	
		display2.innerHTML="  ";

		// below, rejects repeated entries and nonalphabetical except bacspace, enter, shift
		if (theme === "1") 
			{var wordbank=wordbank1;
				var hint=hintbank1;
				var theme="Food";

				}
		else if (theme === "2")
			{var wordbank=wordbank2;
				var hint=hintbank2;
				var theme="Geography";
			}
	
	
	var numberOfWords=wordbank.length;
	var pick=Math.floor(Math.random()*numberOfWords);
	var word=wordbank[pick];
	var hint=hint[pick];
	//input and count
	var userGuess;
	var count=0;
	
	//required data
	var guessesLeft = (word.length)*2;
	var already= [];


	
	// 2. CREATES THE INITIAL WORD DISPLAY

	for (var i=0; i<word.length; i++)	{
		var p=document.createElement("p"); 
		p.setAttribute("id", i);
		var text=document.createTextNode("  __  "); 
		p.appendChild(text); 

		var p2=document.createElement("p");
		var text2=document.createTextNode("   -   ");
		p2.appendChild(text2);

		display1.appendChild(p); 
		display1.appendChild(p2);
		}  //CLOSES DISPLAY LOOP
		
// REMOVE THE EXTRA DASH
		var displayLength=(word.length*2)-1;
		var remove=document.getElementsByTagName("p")[displayLength];
		display1.removeChild(remove);

		// display3.textContent="Select any letter to start";
			display3.innerHTML="Theme: " + theme + "</br>" + "Hint: " + hint + "</br>" + "Letters Guessed: " + already + "</br>"+ "Wins: " + wins + "</br>" + "Losses: " + losses + "</br>" + "Guesses Left: " + guessesLeft;
			display2.innerHTML="~~ Select a Letter ~~"
//INPUT 

	document.onkeyup = function(event) {
		
		userGuess = event.key;	

		var a=already.indexOf(userGuess); 
		
		// below, rejects repeated entries and nonalphabetical except bacspace, enter, shift
		if ((a<0 && (userGuess.match(/^[a-zA-Z]+$/)))){	
			already.push(userGuess);
			guessesLeft--;
		// //below, display data
		display3.innerHTML="Theme: " + theme + "</br>" + "Hint: " + hint + "</br>" + "Letters Guessed: " + already + "</br>"+ "Wins: " + wins + "</br>" + "Losses: " + losses + "</br>" + "Guesses Left: " + guessesLeft;
			display2.innerHTML="~~ Select a Letter ~~"

		//and display new letter
    		for (var i=0; i<word.length; i++){
    			if (userGuess===word[i]) {
    				//our display string is twice length of word
    				var j=i*2;  
    				count++;
    				// display the right guess
					var showLetter=document.getElementsByTagName("p")[j]; 
					showLetter.innerHTML=word[i]; 
				}//if display
			} //for display

function goodbye(){
		document.onkeyup = function(event){
			var playAgain = event.key;
				if (playAgain === "y") {
					display1.innerHTML = " ";
					display2.innerHTML = " ";
					display3.innerHTML = " ";
					restart();
					}
				else {document.querySelector("#display3").innerHTML="Thanks for playing";
				} //else
			} // document.onkeyup 
		} // goodbye
	  		 
	// ARE WE DONE? 	
		if (count === word.length)	{
			display3.textContent="You win! Play again? (Y or N)";
			wins++;
			goodbye();}
		
		if (guessesLeft<=0)
			{losses++;
			display3.textContent="Out of Guesses!  Play Again (y/n)?";
			goodbye();}	 			 		
} //first if	 
} // event
}
}//restart
restart();