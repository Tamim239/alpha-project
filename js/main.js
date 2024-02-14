function playNow() {
  // hide everything
  getPlayNow("home");
  getPlayNow("final-score")
  getPlayGame("play-game");
  // reset game value update
  setTextElementValue("life", 5);
  setTextElementValue("score", 0)
  continueGame();
}

function gameOver(){
  getPlayNow("play-game");
  getPlayGame("final-score");
  const lastScore = getTextElementById("score");
  // console.log(lastScore)
  setTextElementValue("last-score", lastScore);

  // remove background highlight word
  const alphabet = getElementTextById("current-alphabet");
removeBackgroundStyle(alphabet);
}

function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColor(alphabet);
}

// keyboard input access
document.addEventListener("keyup", keyboardPressedKeyup);


// keyup function
function keyboardPressedKeyup(event) {
  // event mean player press which key
  const playerPressed = event.key;
  // if player pressed Esc then  stop game
  if(playerPressed === "Escape"){
    gameOver();
  }
  // console.log(playerPressed);
  // random key access and set up playerPressed  and current alphabet
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
  // console.log( playerPressed ,currentAlphabet);
  if (currentAlphabet === playerPressed) {

    const currentTextElement = getTextElementById("score");
    const newValue = currentTextElement + 1;
    console.log(newValue)
    setTextElementValue("score", newValue);


    // ------------------------------------------
    // set score
    // access score id 
    // const currentScore = document.getElementById("score");
    // const currentScoreValue = currentScore.innerText;
    // set number convert
    // const currentValue = parseInt(currentScoreValue);

    // set score increment
    // const newScore = currentValue + 1;
    //  console.log(newScore)

    //  show update score
    // currentScore.innerText = newScore;

    // start game again
    removeBackgroundStyle(currentAlphabet);
    continueGame();
  }
  else {
    // const currentLifeElement = document.getElementById("life");
    // const currentLifeValue = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeValue);
    //   set new life
    // const newLife = currentLife - 1;
    // show value display
    // currentLifeElement.innerText = newLife;
    const currentLife = getTextElementById("life");
    const lifeValue = currentLife - 1;
    setTextElementValue("life", lifeValue);  
    if(lifeValue === 0){
      gameOver();
    } 
  }
}


