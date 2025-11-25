let number = Math.floor(Math.random() * 100 + 1);
let tries = 0;
function newGame(){
    number = Math.floor(Math.random() * 100 + 1);
    document.getElementById("guess").focus();
document.getElementById("guess").select();
tries = 0;

}
function checkGuess(){
    let guess = document.getElementById("guess").value;
    let msg = "";
    tries++;
    if (guess > number)
        msg = guess + " was too high. Try again.";
    else if (guess < number)
        msg = guess + " was too low. Try again";
    else {
        msg = guess + " is Correct!";
        msg = msg + " Try a new game :";
        msg = msg + " You won in " + tries + " tries.";
        newGame();
    }
let output = document.getElementById("output");
output.innerHTML = msg;
document.getElementById("guess").focus();
document.getElementById("guess").select();
}