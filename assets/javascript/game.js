//how we keep track of score

console.log("first thing we should see");


alert("literally the first thing on the page");


var correct = 0;

var misses = 0;




//an array within an array, that will hold our movie names


var movies = [
	["p","u","l","p","f","i","c","t","i","o","n"],
	["f","i","g","h","t","c","l","u","b"],
	["t","i","t","a","n","i","c"],
	["g","r","e","a","s","e"],
	["f","o","r","r","e","s","t","g","u","m","p"],
	["f","r","i","d","a","y"],

] ;


//this will begin the game upon the pressing of space bar

alert("hopefully we get this far");


        	

 //generates a random y value to determine the move


        var y = Math.floor(Math.random() * 5)

//loops until correct equals amount of letters in movie

    	for (var i = 0  ; correct < movies[y].length || misses === 5 ; i ++)
    	{

    		correct = 0;

    		 alert("I'm thinking of a movie! guess what it is!");
    	


    		 alert(movies[y]);




    		function check (x)
    		{
    			correct = 0;

    			for (var j = 0 ; j < movies[y].length ; j ++)
    			{
    				//if input matches any letter in movies[y], correct will be greater than 0

	    			if (movies[y][j] == x)
	    				{
	    					correct = correct + 1 ;
	    				}

	    			//if correct is greater than 0 (at least one letter hit), will return as succe
	    		}
	    			 //resets the correct check at 0 for the next input

		 	if (correct > 0 )
			{
				alert("you got that letter");
			}

			//otherwise, adds one to misses, will end when misses = 5

		else
			{
				misses = misses + 1;
			}
	    			

    		}

    		check(prompt());

    		

    }



