
var wins=0;
var losses=0;
function restart() {

	var wordbank=["accordion", "animate", "buttons","boxes", "progress", "forms", "maps", "difference"];
	var numberOfWords=wordbank.length;
	var pick=Math.floor(Math.random()*numberOfWords);
	var word=wordbank[pick];
	// var orLength=word.length;
	

 // CREATES THE INITIAL WORD DISPLAY

for (var i=0; i<word.length; i++)	{
	var p=document.createElement("p"); 
	p.setAttribute("id", i);
	var text=document.createTextNode("__"); 
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
		
// THIS PARSES THE WORD INTO AN ARRAY

for (var i = 0; i < word.length; i++) {
   var lettersLeft=word.split(""); 
	}

// IF YOUR INPUT MATCHES A LETTER IN OUR WORD, THEN DISPLAY IT
var lettersTried = [];
var attempts=0;
var attemptsAllowed=(word.length*3);
var attemptsLeft=attemptsAllowed-attempts;
var rightGuess=0;
		
document.onkeyup = function(event) {
	var userGuess = event.key;
	attempts++;
	lettersTried.push(userGuess)
	var display2=document.getElementById ("display2");
	display2.innerHTML= "Attempts: " + attempts + "</br>" + " Letters Tried: " + lettersTried + "</br>" + "Attempts Left: " + attemptsLeft + "</br>" + "Wins: " + wins + "</br>" + "Losses: " + losses; 

// FOR LOOP COMPARES GUESS TO ALL THE LETTERS IN THE WORD.  IF A CORRECT GUESS IS MADE, DISPLAY NEW LETTER, THEN REMOVE THIS LETTER FROM THE WORD? 

    for (var i=0; i<word.length; i++){
    	if (userGuess===word[i]) {
    		rightGuess++;
			var j=i*2;  //our display string is twice length of word
				//display right guess in right slot
			var remove1=document.getElementsByTagName("p")[j];
			remove1.innerHTML=word[i];
			lettersLeft.splice(i,1);
 
// IF ALL LETTERS GUESSED
					if (lettersLeft===0)
				// if (rightGuess===word.length) {
					var display3=document.querySelector("#display3");
					display3.innerHTML="You win! Play again? (Y or N)";
					document.onkeyup=function(event){
						var playAgain=event.key;
						if (event.key==="y") {
							document.querySelector("#display").innerHTML = " ";
							document.querySelector("#display2").innerHTML = " ";
							document.querySelector("#display3").innerHTML = " ";
							restart();}
						else {document.querySelector("#display3").innerHTML="Thanks for playing";
							}
						}
    				}
    			}
			}
		};
	

restart();
