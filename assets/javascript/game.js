var correct = 0;

var misses = 0;

var totalCorrect = 0;

var totalMisses = 0;


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
				alert("you missed that one");
			}
	    		
    		

    	if (totalCorrect === movies[y].length)
    		{
    			alert("you win!!!");



    		}
    	else if (totalMisses === 5)
	    	{
	    		alert("you lose!!!");

	    	}
    	

    		alert(totalMisses);
    		alert(totalCorrect);  		

    
			}

 }   
