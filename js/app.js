const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const resetButton = document.querySelector('.btn__reset');
const hearts = document.getElementsByClassName('tries');
const letterList = document.querySelector('#phrase ul');

const phrases = [
    "Expelliarmus",
    "Avada Kedavra",
    "Expecto Patronum",
    "Wingardium Leviosa",
    "Petrificus Totalus"
]


let missed = 0;

resetButton.addEventListener('click', () => {
    setupGame();
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
    const i = Math.floor((Math.random() * 5));
    const phrase = arr[i];
    return phrase.split("");
}

function addPhraseToDisplay(arr){
    letterList.innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        const listItem = document.createElement("li");
        listItem.textContent = arr[i];        
        letterList.append(listItem);
        if(arr[i] != " "){
            listItem.className = "letter";
        } else {
            listItem.className = "space";
        }
    }
    $('.letter').sparkle({
        color: "rainbow",
        overlap: 10
    });
    $('.letter')
    .off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle");
}

function checkLetter(char){
    const letters = document.querySelectorAll('#phrase li');
    let match = null;
    for(let i = 0; i < letters.length; i++){
        if(char == letters[i].textContent.toLowerCase()){
            letters[i].className += " show";
            match = char;
            $(letters[i]).trigger("start.sparkle");
        }
    }
    return match;
}

keyboard.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName == 'BUTTON' && target.className != 'chosen'){
        target.className = "chosen";
        if(checkLetter(target.textContent) == null){
            registerMiss();
        };
        checkWin();
    };
});

function registerMiss() {
    missed++;
    hearts[missed - 1].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"></img>';
}

function checkWin() {
    const title = document.querySelector('.title');
    if(missed == 5){
        overlay.className = "lose";
        overlay.style.display = "flex";
        title.textContent = "Your spell didn't work";
        resetButton.textContent = "Play again!";
    } else if (document.getElementsByClassName('letter').length == document.getElementsByClassName('show').length){
        setTimeout(function() {
            overlay.className = "win";
            overlay.style.display = "flex";
            title.textContent = "You cast your spell";
            resetButton.textContent = "Play again!";
        }, 2000);
        
    }
}

function setupGame() {
    //reset phrase
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
    //reset keyboard
    const keys = document.querySelectorAll('#qwerty button');
    for (let i = 0; i < keys.length; i++) {
        keys[i].className = "";
    }
    //reset lives
    missed = 0;
    for (let i = 0; i < hearts.length; i++){
        hearts[i].innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"></img>';
    }
}