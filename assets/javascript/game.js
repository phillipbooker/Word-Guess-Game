var bank = ["hair", "goose", "berry", "apple", "pies"];
//var answer = "test";
var answer = bank[Math.floor(Math.random() * bank.length)];
var guesses = 0;
var attempts = [];
var win = 0;
// var progress = ["_", "_", "_", "_"];
var progress = [];

for (var i = 0; i < answer.length; i++){
    progress.push("_");
}



/*
//Create Game object
//Set/create private variables
//Add word bank

Choose a new word once player wins
*/


document.addEventListener("keyup", function(e){
    // console.log(e);

    var pressed = e.key;
    console.log(pressed);
    
    
    //Check to see if a letter was guessed
    var letterIndex = answer.indexOf(pressed);
    console.log(letterIndex);

    
    if((win == 0) && (answer.indexOf(pressed) < 0) && (attempts.indexOf(pressed) < 0)){
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
    document.getElementById("gameDisplay").innerHTML = progress.join(" ");
    document.getElementById("gameAttempts").innerHTML = attempts.join(", ");
    document.getElementById("gameGuesses").innerHTML = "Guesses: " + guesses;
    console.log(attempts);

    if (progress.indexOf("_") < 0){
        win = 1;
        document.getElementById("gameWin").innerHTML = "You win!";
    };

});


//alert("Hello");

// function takeLetter() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

