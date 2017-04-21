//how we keep track of score

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

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        	

 //generates a random y value to determine the move


        var y = Math.floor(Math.random() * 5);


//loops until correct equals amount of letters in movie

    	for (var i = 0 ; correct < movies[y])






    }
}