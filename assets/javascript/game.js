
function restart() {

		var wordbank=["accordion", "animate", "buttons","boxes", "progress", "forms", "maps", "difference"];
		var numberOfWords=wordbank.length;
		var pick=Math.floor(Math.random()*numberOfWords);
		var word=wordbank[pick];

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
    		word.charAt(i);
		}

// IF YOUR INPUT MATCHES A LETTER IN OUR WORD, THEN DISPLAY IT
		var lettersTried = [];
		var attempts=0;
		var rightGuess=0;
		
		document.onkeyup = function(event) 		{
				var userGuess = event.key;
				attempts++;
				lettersTried.push(userGuess)
				var display2=document.getElementById ("display2");
				display2.innerHTML= "Attempts: " + attempts + "</br>" + " Letters Tried: " + lettersTried; 

        for (var i=0; i<word.length; i++)		{
    			if (userGuess===word[i])
    				{
    					rightGuess++;
    					var j=i*2;  //our display string is twice length of word
    					//display right guess in right slot
    					var remove1=document.getElementsByTagName("p")[j];
						remove1.textContent=word[i];
								if (rightGuess===word.length) 
									{
						// var p3=document.createElement("p");
						// var text3=document.createTextNode("You Win!");
						// p3.appendChild(text3);
						// display2.appendChild(p3);
									var again=confirm("You win! Play again?");
										if (again) {
											
		p.removeChild(text); 
		p2.removeChild(text2);
		position.removeChild(p); 
		position.removeChild(p2);


											restart();}
											else {document.write("Thanks for playing");
										}
								}
    					}
    			}
		}
;}
restart();
