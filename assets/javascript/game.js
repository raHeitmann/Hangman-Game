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
alert(movies[y]);

number = Math.floor(Math.random() * 5);
y = number;






				for (i=0; misses < 5 && totalCorrect < movies[y].length; i++) {

				alert("we are in the loop");
				check("guessLetter");

				}

    		if (totalCorrect===movies[y].length) {

		    	alert("you win!");
		    }

		    else if (misses===5)
		    {

			    alert("you lose!"); 
			}


 console.log(movies[y]);




}

//loops until correct equals amount of letters in movie or misses = 5


     //here is our function that will check if the letter you typed is within the movie name

   




		function check (x)
		    		{
		    			correct = 0;

		    			var x = document.getElementById("guessLetter");
		    			x = toString(x);
		    			

		    			
		    			var length = movies[y].length;

		    			alert(x);

		    			

		    			for (var j = 0 ; j < length; j ++)
		    			{
		    			//if input matches any letter in movies[y], correct will be greater than 0

		    				alert("we are in the checking loop");


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


