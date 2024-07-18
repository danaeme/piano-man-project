document.addEventListener('DOMContentLoaded', () => {
/*-------------- Constants -------------*/
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];

/*---------- Variables (state) ---------*/
let compSequence = [];
let userSequence = [];
let score = 0;
let userIsPlaying = false; 

/*----- Cached Element References  -----*/
const keys = Array.from(document.querySelectorAll('.key')); 
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const scoreDisplay = document.querySelector('.score-display');
const gameOverMessage = document.querySelector('#game-over');
const youWinMessage = document.querySelector('#you-win');
const dogPreparing = document.querySelector('#dog-preparing');
const dogPlaying = document.querySelector('#dog-playing');
const dogSinging = document.querySelector('#dog-singing');
const crowdImage = document.querySelector('#crowd-image');
const stageLights = document.querySelector('#stage-lights');
const tomatoSplat1 = document.querySelector('#tomatosplat-left');
const tomatoSplat2 = document.querySelector('#tomatosplat-right');
const rulesText = document.querySelector('#rules');
const angryCrowd = document.querySelector('#angry-crowd');

/*-------------- Functions -------------*/
function startGame() {
    compSequence = [];
    userSequence = [];
    score = 0;
    updateScore();
    gameOverMessage.style.display = 'none';
    youWinMessage.style.display = 'none';
    userIsPlaying = false;
    startButton.disabled = false;
    resetButton.disabled = true; 
   dogPreparing.style.display = 'block';
   dogPlaying.style.display = 'none';
   dogSinging.style.display = 'none';
   crowdImage.style.display = 'none';
   angryCrowd.style.display = 'none';
   stageLights.style.display = 'none';
   tomatoSplat1.style.display = 'none';
   tomatoSplat2.style.display = 'none';
   rulesText.style.display = 'block';
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}/5`
}

function playSound(note) {
    const audio = new Audio(`audio/${note}.mp3`);
    audio.volume = 1;
    audio.play();
    //console.log(`Note played: ${note}`);
}

function flashKey(note) {
    //function to make key flash. 
    const key = keys.find(key => key.textContent === note);
    if (key) {
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 900);
    }
}

function computerTurn() {
    userIsPlaying = false;
    keys.forEach(key => key.disabled = true); //Disable keys while comp is playing
    //Generate next note in the sequence
    const nextNote = notes[Math.floor(Math.random() * notes.length)];
    compSequence.push(nextNote);
    dogPlaying.style.display = 'block';
    dogPreparing.style.display = 'none';
    dogSinging.style.display = 'none';
    rulesText.style.display = 'none';
    //Play the sequence
    compSequence.forEach((note, index) => {
        setTimeout (() => {
            playSound(note);
            flashKey(note);
        }, index * 1000);
    });
    setTimeout(() => {
        keys.forEach(key => key.disabled = false);
        userIsPlaying = true;
    }, compSequence.length * 1000); //enable keys after enough time for all comp notes have played
    dogPlaying.style.opacity = 1;
}

function keyClick(event) {
    if (!userIsPlaying || !event.target.classList.contains('key')){
        return;
    }   
    else {
        dogPlaying.style.opacity = .5;
        const note = event.target.textContent.trim(); //trim to get 'note' from text
        playSound(note);
        userSequence.push(note);
    
        const noteIdx = userSequence.length - 1; //needed for 0 index array
    
        if (userSequence[noteIdx] !== compSequence[noteIdx]) {
            gameOverMessage.style.display = 'block';
            tomatoSplat1.style.display = 'block';
            tomatoSplat2.style.display = 'block';
            angryCrowd.style.display = 'block';
            keys.forEach(key => key.disabled = true);
            userIsPlaying = false;
            dogPlaying.style.display = 'none';
            dogPreparing.style.display = 'none';
            dogSinging.style.display = 'block';
            return;
        }
        else if (userSequence.length === compSequence.length) {
            score++;
            updateScore();
            if (score === 5) {
                youWinMessage.style.display = 'block';
                keys.forEach(key => key.disabled = true);
                crowdImage.style.display = 'block';
                dogPlaying.style.display = 'none';
                dogPreparing.style.display = 'none';
                dogSinging.style.display = 'block';
                stageLights.style.display = 'block';
                return;
            }
            userSequence = [];
            setTimeout(computerTurn, 2000);
        }
    }   
}



/*----------- Event Listeners ----------*/
    
    document.querySelector('.piano').addEventListener('click', keyClick);
    
    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        resetButton.disabled = false;
        computerTurn();
    });
    
    resetButton.addEventListener('click', startGame);
});
