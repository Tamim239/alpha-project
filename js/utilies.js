function getPlayNow(elements) {
    const element = document.getElementById(elements);
    element.classList.add("hidden");
}

function getPlayGame(elements) {
    const element = document.getElementById(elements);
    element.classList.remove("hidden");
}

function getRandomAlphabet() {
    // alphabet in array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
  
    // random index 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // index of alphabet 
    const alphabet = alphabets[index];
    return alphabet;
}

// keyboard highlight style add
function setBackgroundColor(elements){
    const element = document.getElementById(elements);
    element.classList.add("bg-orange-600");
    element.classList.add("text-white");
}

// keyboard highlight remove style
function removeBackgroundStyle(elements){
    const element = document.getElementById(elements);
    element.classList.remove("bg-orange-600");
    element.classList.remove("text-white");
}

// keyup function
function keyboardPressedKeyup(event){
    // event mean player press which key
    const playerPressed = event.key;
    // console.log(playerPressed);
    // random key access and set up playerPressed  and current alphabet
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
    console.log( playerPressed ,currentAlphabet);
    if(currentAlphabet === playerPressed){
        // set score
        // access score id 
        const currentScore = document.getElementById("score");
        const currentScoreValue = currentScore.innerText;
        // set number convert
        const currentValue = parseInt(currentScoreValue);
        
        // set score increment
        const newScore = currentValue + 1;
         console.log(newScore)
         
        //  show update score
        currentScore.innerText = newScore;

        // start game again
        removeBackgroundStyle(currentAlphabet);
        continueGame();
    }
    else {
        const currentLifeElement = document.getElementById("life");
        const currentLifeValue = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeValue);
        //   set new life
        const newLife = currentLife - 1;
        // show value display
        currentLifeElement.innerText = newLife;
        }
}