
// 1. SELECT THE WORD TO BE GUESSED ("WORD")
function restart() {
	var wordbank=["masses", "differences"];
	var numberOfWords=wordbank.length;
	var pick=Math.floor(Math.random()*numberOfWords);
	var word=wordbank[pick];
	var userGuess;
	var count=0;
	var already=[];
	var left=0

	// variables for display2
	var display2=document.getElementById ("display2");
	var lettersLeft=word.split(""); // split word into array 
	var lettersTried = [];
	var attempts=0;
	var rightGuess=0;
	var rightLetters=[];
	var display3=document.querySelector("#display3");	
	
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
		}  //CLOSES DISPLAY LOOP
		
// REMOVE THE EXTRA DASH
		var displayLength=(word.length*2)-1;
		var remove=document.getElementsByTagName("p")[displayLength];
		position.removeChild(remove);


//INPUT 

	document.onkeyup = function(event) {
		userGuess = event.key;	
		var a=already.indexOf(userGuess); 
		if (a<0){	
		already.push(userGuess);

//this prevents repeat letters
// for (var i=0; i<already.length; i++){
// if (userGuess !== already[i]  && userGuess!== word[i])
	// { 
		// display 
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

	 for (var i=0; i<lettersLeft.length; i++){
	 	if (userGuess===lettersLeft[i]) {
	 		lettersLeft.splice(i, 1);
	 		
	 	} //if 
	 }//for 	
				
			 
	// 7. ARE WE DONE? 	
	if (count === word.length)	{
		display3.textContent="You win! Play again? (Y or N)";
			
			document.onkeyup = function(event){
			var playAgain = event.key;
				if (playAgain === "y") {
					document.querySelector("#display").innerHTML = " ";
					document.querySelector("#display2").innerHTML = " ";
					display3.innerHTML = " ";
					restart();
					}

				else {document.querySelector("#display3").innerHTML="Thanks for playing";
				} //else
			} // document.onkeyup 
		} // if count 
} //first if	 

} // event
 }//restart
restart();