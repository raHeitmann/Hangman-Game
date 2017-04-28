//how we keep track of score

window.onload = function () { alert("It's loaded!") }

var correct = 0;

var misses = 0;

var totalCorrect = 0;

var y = 0 ; 

var number = 0;

//an array within an array, that will hold our movie names

var movies = [
	["p","u","l","p","f","i","c","t","i","o","n"],
	["f","i","g","h","t","c","l","u","b"],
	["t","i","t","a","n","i","c"],
	["g","r","e","a","s","e"],
	["f","o","r","r","e","s","t","g","u","m","p"],
	["f","r","i","d","a","y"],

] ;

//document.getElementById("start").addEventListener("keypress", begin);

function begin() {

alert("we have begun");


number = Math.floor(Math.random() * 5);
y = number;

console.log(y);

totalCorrect = 0;

console.log(movies[y]);

misses = 0;

var input = document.getElementById('guessLetter');
input.addEventListener('keypress',function(){

		input = input.value;

		console.log(input);

		check(input);

				function check (x)
				    		{
				    		
			    			correct = 0;

			    			var length = movies[y].length;

			    			console.log(x + "this should be the letter you inputted");

				    			for (var j = 0 ; j < length; j ++)
				    			{
				    			//if input matches any letter in movies[y], correct will be greater than 0

				    				console.log("we are in the checking loop");


					    			if (toString(movies[y][j]) === x)
					    				{
					    					correct ++ ;
					    					
					    					totalCorrect ++ ;
					    				}
								}
					    			
						//if correct is greater than 0 (at least one letter hit), will return as succes
						 	if (correct > 0 )
							{
								alert("you got that letter");
							}

							//otherwise, adds one to misses, will end when misses = 5

						else
							{
								misses = misses + 1;
								alert("you missed one!")
							}
					    			


					    				alert(misses);
										alert(totalCorrect);

							};
						});
							

    		if (totalCorrect===movies[y].length) {

		    	alert("you win!");
		    }

		    else if (misses===5)
		    {

			    alert("you lose!"); 
			}


 console.log(movies[y]);

}
