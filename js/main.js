function playNow(){
    getPlayNow("home");
    getPlayGame("play-game");
    continueGame();
}

function continueGame(){
  const alphabet = getRandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColor(alphabet);
}

// keyboard input access
document.addEventListener("keyup", keyboardPressedKeyup)