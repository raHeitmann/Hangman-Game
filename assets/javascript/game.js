var correct = 0;

var misses = 0;

var totalCorrect = 0;

var totalMisses = 0;

 var guessedArray = [];





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

//resets the score
totalMisses=0;
totalCorrect=0;
misses = 0;
correct = 0;
guessedArray = [];
guessCount=0;
underscores = '';
y=0;

count.innerHTML = "Misses: "+totalMisses;
total.innerHTML = "you have missed "+totalMisses+"  <br>you have gotten "+totalCorrect+" correct so far";

	var guessedDiv = document.getElementById("guessed");
	   	guessedDiv.innerHTML = "Letters guessed: "+guessedArray;

var games = document.getElementById("games");

 games.innerHtml = "Take a guess!";

 console.log("this should be letters guessed "+guessedArray.value);

 //generates a random y value to determine the move
  var y = Math.floor(Math.random() * 5);	

  //alert("I'm thinking of a movie! guess what it is!");


//here is our display set up
	var word = "";
    word = movies[y].toString();
 console.log(movies[y].toString());
  var underscores = word.split("").map(function(){return "_"});

  var spaces = document.getElementById("spaces");
  spaces.innerHTML = underscores;

  
    	
  

document.getElementById("guessLetter").addEventListener("keyup", function(){
 


    var x = document.getElementById("guessLetter");
    x.value = x.value.toLowerCase();



    console.log(x.value);

    var guessCount = 0;

    for (var i = 0 ; i < guessedArray.length; i++)
    {
    	
	   	 if (x.value===guessedArray[i])
		    {
		    	games.innerHTML = "you've already guessed that one!" ;
		    	guessCount++;
		    	
			}
	}

	if (guessCount === 0)
	{
		check(x.value);
	}


guessCount = 0;


x.value = "";


});

    		function check (x)
    		{
    			var index = word.indexOf(x);
			    while(index > -1)
			    {

			    	underscores[index] = x;
			    	var index = word.indexOf(x, index+1);
			    	spaces.innerHTML = underscores;

			    }


    			console.log(x);


    			for (var j = 0 ; j < movies[y].length; j ++)
    			{
    				//if input matches any letter in movies[y], correct will be greater than 0
    	
	    			if (movies[y][j] === x)
	    				{
	    					correct++;
	    					console.log(movies[y][j]);
	    					totalCorrect++;
	    				}
	    				
					else 
						{
							misses++;
							console.log(misses);
						}

				}

			if (correct>0)
			{
				games.innerHTML = "you got that one!";
				
				correct = 0;
			}

			else //if (misses === movies[y].length)
			{
				var count = document.getElementById("count");
				totalMisses++;
				games.innerHTML = "you missed that one";
				count.innerHTML = "Misses: "+totalMisses;
			}

			//RESETS OUR GUESS BOX AFTER THE CHECK LOOP
	    var input = document.getElementById("guessLetter");
	   	
	   	guessedArray.push(input.value);
	   	
	   	guessedDiv.innerHTML = "Letters guessed: "+guessedArray;
	    input.value = "";
    		


    	if (totalCorrect === movies[y].length)
    		{
    			input.value = "";
    			confirm("you win!!! press start to begin a new game");
    			
    		}
    	else if (totalMisses === 5)
	    	{
	    		input.value = "";
	    		confirm("you lose... press start to begin a new game");
    			
	    	}
    	
	    	var total = document.getElementById("total");
    		total.innerHTML = "you have missed "+totalMisses+"  <br>you have gotten "+totalCorrect+" out of the "+movies[y].length+" letters in this movie";  		

    
			}

 }   
