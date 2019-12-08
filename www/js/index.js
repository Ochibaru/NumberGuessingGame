const btnPlay = document.getElementById("btnPlay");
const btnReset = document.getElementById("btnReset");
const guess = document.getElementById("guess");
const frmGuess = document.getElementById("frmGuess");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
let guesses = 0;
let randomNumber;

btnPlay.addEventListener("click", function(){
    startScreen.classlist.add("hidden");
    gameScreen.classlist.remove("hidden");

});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

frmGuess.addEventListener("submit", function(event){
    event.preventDefault();
    guesses++;
    const numberGuess = guess.value;
    // This will allow the android phone to vibrate
    let deviceVibrate = window.plugins.deviceFeedback;

    if(numberGuess != randomNumber){
        deviceVibrate.haptic(DF.VIRTUAL_KEY);
        alert("Incorrect, please try again.");
        frmGuess.reset();
    }
    else if (numberGuess == randomNumber){
        alert("You won in ${quesses} turn(s).");
        number.innerHTML = "${randomNumber}";
        frmGuess.reset();
        randomNumber = reset.classList.remove("hidden");
    }
});

btnReset.addEventListener("click", () => {
    reset.classList.add("hidden");
    getRandomInt(1, 10);
});


// Start the application
document.addEventListener("deviceready", getRandomInt(1, 10));