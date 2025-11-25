let number = Math.floor(Math.random() * 100 + 1);
function checkGuess(){
    let guess = document.getElementById("guess").value;
    let msg = "";
    if (guess > number)
        msg = guess + " was too high. Try again.";
    else if (guess < number)
        msg = guess + " was too low. Try again";
    else {
        msg = guess + " is Correct!";
    }
let output = document.getElementById("output");
output.innerHTML = msg;
}