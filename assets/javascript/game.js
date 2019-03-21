var answer = "test";
var guesses = 0;
var attempts = [];
var win = 0;
var progress = ["_", "_", "_", "_"];



document.addEventListener("keyup", function(e){
    // console.log(e);

    var pressed = e.key;
    console.log(pressed);
    
    
    
    var letterIndex = answer.indexOf(pressed);
    console.log(letterIndex);

    
    if((win == 0) && (answer.indexOf(pressed) < 0) && (attempts.indexOf(pressed) < 0)){
        attempts.push(pressed);
        // console.log("Live: " + live);
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
    console.log(attempts);

    if (progress.indexOf("_") < 0){
        win = 1;
        document.getElementById("gameWin").innerHTML = "You win!";
    };
    //Check to see if "_" is still in progress

});


//alert("Hello");

// function takeLetter() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

