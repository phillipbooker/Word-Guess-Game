//Fisher-Yates Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


var bank = ["hair", "goose", "berry", "apple", "pies"];
bank = shuffle(bank);
console.log(bank);
//var answer = "test";
//var answer = bank[Math.floor(Math.random() * bank.length)];
var bankIndex = 0;
var answer = bank[bankIndex];
var guesses = 0;
var attempts = [];
var win = 0;
var score = 0;
var done = 0;
// var progress = ["_", "_", "_", "_"];
var progress = [];

for (var i = 0; i < answer.length; i++){
    progress.push("_");
}

document.getElementById("gameDisplay").innerHTML = progress.join(" ");



/*
//Create Game object
//Set/create private variables
//Add word bank

Choose a new word once player wins
*/


document.addEventListener("keyup", function(e){
    if((e.which >= 65) && (e.which <= 90)){
        if(win == 1 && done != 1){
            //Choose new word and reinitialize game variables
            win = 0;
            guesses = 0;
            attempts = [];
            progress = [];
            answer = bank[bankIndex];
            for (var i = 0; i < answer.length; i++){
                progress.push("_");
            }
    
            console.log("New answer is: " + answer);
            document.getElementById("gameWin").innerHTML = "";
    
            
        } else if (!done){
            var pressed = e.key;
            console.log(pressed);
            
            //Check to see if a letter was guessed
            var letterIndex = answer.indexOf(pressed);
            console.log(letterIndex);
    
            if((done == 0) && (answer.indexOf(pressed) < 0) && (attempts.indexOf(pressed) < 0)){
                attempts.push(pressed);
                guesses++;
            } else{
                console.log("Yes!");
                progress[letterIndex] = answer[letterIndex];
    
                for (var i = 0; i < answer.length; i++) {
                    if(answer.charAt(i) == pressed){
                        progress[i] = pressed;
                    }
                }
            }
    
            //Game is won
            if (progress.indexOf("_") < 0){
                win = 1;
                document.getElementById("gameWin").innerHTML = "You guessed it! (Press any key to continue!)";
                score++;
                bankIndex++;
                //answer = bank[bank.indexOf(answer) + 1];
                //console.log("New answer is: " + answer);
            }
        }
    
        
    
        document.getElementById("gameDisplay").innerHTML = progress.join(" ");
        document.getElementById("gameAttempts").innerHTML = attempts.join(", ");
        document.getElementById("gameGuesses").innerHTML = "Guesses: " + guesses;
        // console.log(attempts);
    
        if(bankIndex == bank.length){
            done = 1;
            document.getElementById("gameWin").innerHTML = "You won the game!";
            document.getElementById("gameHint").innerHTML = "Refresh to play again!";
        }
    }
    

});


//alert("Hello");

// function takeLetter() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

