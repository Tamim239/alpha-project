function getPlayNow(elements) {
    const element = document.getElementById(elements);
    element.classList.add("hidden");
}

function getPlayGame(elements) {
    const element = document.getElementById(elements);
    element.classList.remove("hidden");
}

function getElementTextById(elements){
    const element = document.getElementById(elements);
    const  value = element.innerText;
    return value;
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
function setBackgroundColor(elements) {
    const element = document.getElementById(elements);
    element.classList.add("bg-orange-600");
    element.classList.add("text-white");
}
// keyboard highlight remove style
function removeBackgroundStyle(elements) {
    const element = document.getElementById(elements);
    element.classList.remove("bg-orange-600");
    element.classList.remove("text-white");
}


// shortcut value get element
function getTextElementById(elements) {
    const element = document.getElementById(elements);
    const currentElement = element.innerText;
    const elementValue = parseInt(currentElement);
    return elementValue;
}

// set value display shortcut 
function setTextElementValue(elements, value) {
    const element = document.getElementById(elements);
    element.innerText = value;
}

