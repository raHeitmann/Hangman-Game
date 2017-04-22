//how we keep track of score



var correct = 0;

var misses = 0;

var totalCorrect = 0;


//an array within an array, that will hold our movie names


var movies = [
	["p","u","l","p","f","i","c","t","i","o","n"],
	["f","i","g","h","t","c","l","u","b"],
	["t","i","t","a","n","i","c"],
	["g","r","e","a","s","e"],
	["f","o","r","r","e","s","t","g","u","m","p"],
	["f","r","i","d","a","y"],

] ;



 //generates a random y value to determine the move


        var y = Math.floor(Math.random() * 5);

//loops until correct equals amount of letters in movie or misses = 5

    	for (var i = 0  ; misses < 5 && totalCorrect < movies[y].length ; i ++)
    	{

 
    		

    		 alert("I'm thinking of a movie! guess what it is!");
    	
    		 alert(movies[y]);

     //here is our function that will check if the letter you typed is within the movie name

    		function check (x)
    		{
    			correct = 0;

    			for (var j = 0 ; j < movies[y].length; j ++)
    			{
    			
    			//if input matches any letter in movies[y], correct will be greater than 0

	    			if (movies[y][j] === x)
	    				{
	    					correct ++ ;
	    					console.log(movies[y][j]);
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
			}
	    			

    		}

    		check(prompt());

    		alert(misses);
    		alert(totalCorrect);
    		

    }

    alert("game over!");



