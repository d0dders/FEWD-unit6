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
    return phrase.split();
}

const myWord = getRandomPhraseAsArray(phrases);

//Allocate chosen phrase to the html