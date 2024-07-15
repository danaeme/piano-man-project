/*-------------- Constants -------------*/
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C1'];

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
    userIsPlaying = false;
    console.log('Initializing game..');
}

function enableKeys() {
    keys.forEach(element => {
        element.disabled = false;
    });
    console.log('Enabled keys');
}

function disableKeys() {
    keys.forEach(element => {
        element.disabled = true;
    })
    console.log('Disabled keys');
}

function enableStartButton() {
    startButton.disabled = false;
    console.log('Enabled Start Button');
}
function disableStartButton(){
    startButton.disabled = true;
    console.log('Disabled Start');
}
function enableResetButton() {
    resetButton.disabled = false;
    console.log('Reset enabled');
}
function disableResetButton() {
    resetButton.disabled = true;
    console.log('Reset disabled');
}

function playSound(note) {
    const audio = new Audio(`../audio/${note}.mp3`);
    audio.volume = 1.5;
    audio.play();
    console.log(`Note played: ${note}`);
}

function flashKey(note) {
    //function to make key flash. 
}

function computerTurn() {
    userIsPlaying = false;
    //Generate next note in the sequence
    //Play the sequence
    //set userIsPlaying back to true
}

function keyClick(event) {
    //ignore if click is not on a key OR if it's the computer's turn

    //IF players turn:
    //get the note associated with the clicked key
    //play the sound for the clicked key
    //PUSH it to user sequence
}





/*----------- Event Listeners ----------*/
// document.querySelector('.piano').addEventListener()

// const audio = new Audio(`../audio/C.mp3`);
//     audio.volume = 3;
//     audio.play();