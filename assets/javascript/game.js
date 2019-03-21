var answer = "test";
var guesses = 0;
var attempts = [];
var live;
var progress = ["_", "_", "_", "_"];



document.addEventListener("keyup", function(e){
    // console.log(e);
    var answerIndex;

    var pressed = e.key;
    console.log(pressed);
    
    
    
    var letterIndex = answer.indexOf(pressed);
    console.log(letterIndex);

    
    if((answer.indexOf(pressed) < 0) && (attempts.indexOf(pressed) < 0)){
        attempts.push(pressed);
        guesses++;
    } else{
        console.log("Yes!");
        progress[letterIndex] = answer[letterIndex];

        for (var i = 0; i < answer.length; i++) {
            if(answer.charAt(i) == pressed){
                progress[i] = pressed;
            }
            //alert(str.charAt(i));
        }
    }
    document.getElementById("gameDisplay").innerHTML = progress.join(" ");
    console.log(attempts);
});


//alert("Hello");

// function takeLetter() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

