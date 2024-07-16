/*-------------- Constants -------------*/
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'];

/*---------- Variables (state) ---------*/
let compSequence = [];
let userSequence = [];
let score = 0;
let userIsPlaying = false; //if user turn is in progress

/*----- Cached Element References  -----*/
const keys = document.querySelector('.key');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const scoreDisplay = document.querySelector('.score-display');
const gameOverMessage = document.querySelector('#game-over');
const youWinMessage = document.querySelector('#you-win');

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
    //console.log('Initializing game..');
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}/5`
}

function playSound(note) {
    const audio = new Audio(`/audio/${note}.mp3`);
    audio.volume = 1;
    audio.play();
    //console.log(`Note played: ${note}`);
}

function flashKey(note) {
    //function to make key flash. 
}

function computerTurn() {
    userIsPlaying = false;
    keys.forEach(key => key.disabled = true); //Disable keys while comp is playing
    //Generate next note in the sequence
    const nextNote = notes[Math.floor(Math.random() * notes.length)];
    compSequence.push(nextNote);
    //Play the sequence
    compSequence.forEach((note, index) => {
        setTimeout (() => {
            playSound(note);
        }, 1000);
    });
    //set userIsPlaying back to true
    setTimeout(() => {
        keys.forEach(key => key.disabled = false);
        userIsPlaying = true;
    }, compSequence.length * 1000); //enable keys after enough time for all comp notes have played
}

function keyClick(event) {
    //ignore if click is not on a key OR if it's the computer's turn

    //IF players turn:
    //get the note associated with the clicked key
    //play the sound for the clicked key
    //PUSH it to user sequence
}



/*----------- Event Listeners ----------*/
document.querySelector('.piano').addEventListener('click', keyClick);

// const audio = new Audio(`../audio/${note}.mp3`);
//     audio.volume = 3;
//     audio.play();