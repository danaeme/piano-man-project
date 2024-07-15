/*-------------- Constants -------------*/
const keys = document.querySelector('.key');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const scoreDisplay = document.querySelector('.score-display');
const gameOverMessage = document.querySelector('#game-over');
const youWinMessage = document.querySelector('#you-win');
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C1'];

/*---------- Variables (state) ---------*/
let compSequence = [];
let userSequence = [];
let score = 0;
let userIsPlaying = false; //if user turn is in progress

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function startGame() {
    compSequence = [];
    userSequence = [];
    score = 0;
    userIsPlaying = false;
}

function enableKeys() {
    keys.forEach(element => {
        element.disabled = false;
    });
}

function disableKeys() {
    keys.forEach(element => {
        element.disabled = true;
    })
}

function enableStartButton() {
    startButton.disabled = false;
}
function disableStartButton(){
    startButton.disabled = true;
}
function enableResetButton() {
    resetButton.disabled = false;
}
function disableResetButton() {
    resetButton.disabled = true;
}

function keyClick(event) {
    
}





/*----------- Event Listeners ----------*/
document.querySelector('.piano').addEventListener()
