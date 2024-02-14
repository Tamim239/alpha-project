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

// keyboard highlight 
function setBackgroundColor(elements){
    const element = document.getElementById(elements);
    element.classList.add("bg-orange-600");
    element.classList.add("text-white");
}