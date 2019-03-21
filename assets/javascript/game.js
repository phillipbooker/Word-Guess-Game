



document.addEventListener("keyup", function(e){
    console.log(e);
    console.log(e.key);
    document.getElementById("gameDisplay").innerHTML = e.key;
});


//alert("Hello");

// function takeLetter() {
//     var x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

