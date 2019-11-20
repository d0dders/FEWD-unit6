const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const resetButton = document.querySelector('.btn__reset');
const phrases = [
    "Show me the money",
    "Say hello to my little friend",
    "I love the smell of napalm in the morning",
    "Just keep swimming",
    "I'm having an old friend for dinner"
]

let missed = 0;

resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
    const i = Math.floor((Math.random() * 5));
    const phrase = arr[i];
    return phrase.split("");
}

function addPhraseToDisplay(arr){
    const letterList = document.querySelector('#phrase ul');
    for (let i = 0; i < arr.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = arr[i];        
        letterList.append(listItem);
        if(arr[i] != " "){
            listItem.className = "letter";
        } else {
            listItem.className = "space";
        }
    }
}

function checkLetter(char){
    const letters = document.querySelectorAll('#phrase li');
    let match = null;
    for(let i = 0; i < letters.length; i++){
        if(char == letters[i].textContent.toLowerCase()){
            letters[i].className += " show";
            match = char;
        }
    }
    return match;
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));