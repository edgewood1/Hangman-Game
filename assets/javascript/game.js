
var wins=0;
var losses=0;


function restart() {

	// 1. SELECT THE WORD TO BE GUESSED ("WORD")

	var wordbank=["masses", "differences"];
	var numberOfWords=wordbank.length;
	var pick=Math.floor(Math.random()*numberOfWords);
	var word=wordbank[pick];
	
	

	// 2. CREATES THE INITIAL WORD DISPLAY

	for (var i=0; i<word.length; i++)	{
		var p=document.createElement("p"); 
		p.setAttribute("id", i);
		var text=document.createTextNode("  __  "); 
		p.appendChild(text); 

		var p2=document.createElement("p");
		var text2=document.createTextNode("   -   ");
		p2.appendChild(text2);

		var position=document.getElementById("display"); 
		position.appendChild(p); 
		position.appendChild(p2);
		}
		// REMOVE THE EXTRA DASH
		var displayLength=(word.length*2)-1;
		var remove=document.getElementsByTagName("p")[displayLength];
		position.removeChild(remove);


	
	// 3. CREATE OTHER VARIALES FOR DISPLAY2

	var lettersLeft=word.split(""); // SPLIT LETTERS IN WORD INTO AN ARRAY CALLED "LETTERSLEFT"
	var lettersTried = [];
	var attempts=0;
	var rightGuess=0;
	var attemptsAllowed=(word.length*3);
	var attemptsLeft=attemptsAllowed-attempts;
	
	
	// 4. GRAB USER INPUT 

	document.onkeyup = function(event) {
		var userGuess = event.key;
		attempts++;
		lettersTried.push(userGuess)
			
 

	// 5. DISPLAY LOOP FOR CORRECT GUESS 

    for (var i=0; i<word.length; i++){
    	if (userGuess===word[i]) {
    		var j=i*2;  //our display string is twice length of word
				var showLetter=document.getElementsByTagName("p")[j]; 
				showLetter.innerHTML=word[i];// display the right guess
				// could you add i to an new array? 247
			}}

	for (var i=0; i<lettersLeft.length; i++) {
    	if (userGuess===lettersLeft[i]) { 
    		rightGuess++;
			lettersLeft.splice(i,1);  // if the 3rd letter matches, this should remove the 3rd letter from LL
		}}

	var display2=document.getElementById ("display2");
	display2.innerHTML=  "Right Guesses: " + rightGuess  + "</br>" + lettersLeft.length +  " letters left: " + lettersLeft + "</br>" +attempts + " Attempts Made: " +  lettersTried;
	 		  
			
// IF ALL LETTERS GUESSED - lettersleft.length should go down with each letter removed. 
					if (rightGuess===word.length) {
				// if (rightGuess===word.length) {
						var display3=document.querySelector("#display3");
						display3.textContent="You win! Play again? (Y or N)";
						document.onkeyup = function(event){
						var playAgain = event.key;
							if (playAgain === "y") {
								document.querySelector("#display").innerHTML = " ";
								document.querySelector("#display2").innerHTML = " ";
								display3.innerHTML = " ";
								restart();}
					
							else {document.querySelector("#display3").innerHTML="Thanks for playing";
							} //CLOSE ELSE		
						} // CLOSE DOCUMENT.ONKEYUP - THIS IS A FUNCTION EVENT
					} // CLOSE IF LL.L
    			} //CLOSE IF USERNAME IS CORRECT
    		} //CLOSE FORLOOP THAT COMPARES GUESS TO CORRECT ANSWER
		 
	

restart();
