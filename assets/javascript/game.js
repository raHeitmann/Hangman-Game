var correct = 0;

var misses = 0;

var totalCorrect = 0;

var totalMisses = 0;

var games = document.getElementById("games");

var count = document.getElementById("count");

var total = document.getElementById("total");
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


 function begin(){
 //generates a random y value to determine the move

 document.getElementById("games").innerHtml("Take a guess!");


  var y = Math.floor(Math.random() * 5);	

  alert("I'm thinking of a movie! guess what it is!");
    	
  alert(movies[y]);

document.getElementById("guessLetter").addEventListener("keyup", function(){
 
    var x = document.getElementById("guessLetter");
    x.value = x.value.toLowerCase();

    console.log(x.value);

    check(x.value);
});

    		function check (x)
    		{
    			

    			console.log(x);



    			for (var j = 0 ; j < movies[y].length; j ++)
    			{
    				//if input matches any letter in movies[y], correct will be greater than 0
    	
	    			if (movies[y][j] === x)
	    				{

	    					correct++;
	    					console.log(movies[y][j]);
	    					
	    				}
	    				
					else 
						{
							misses++;
						}

				}

			if (correct>0)
			{
				totalCorrect++;
			}

			else if (misses === movies[y].length)
			{
				totalMisses++;
				games.innerHTML("you missed that one");
				count.innerHTML("Misses: "+totalMisses);
			}
	    		
    		

    	if (totalCorrect === movies[y].length)
    		{
    			games.innerHTML("you win!!!");



    		}
    	else if (totalMisses === 5)
	    	{
	    		games.innerHTML("you lose!!!");

	    	}
    	

    		total.innerHTML("you have missed "+totalMisses+"  <br>you have gotten "+totalCorrect+"out of the "+movies[y].length+" letters in this movie");  		

    
			}

 }   
