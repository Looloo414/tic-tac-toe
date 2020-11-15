/*-------------------------------- Constants --------------------------------*/
const colors = { 
    player1: 'red',
    player2: 'blue',
    null: 'white'
}

const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner;
// Variables might include (board/turn/winner)

/*------------------------ Cached Element References ------------------------*/
const sq0 = document.getElementById("sq0");
const sq1 = document.getElementById("sq1");
const sq2 = document.getElementById("sq2");
const sq3 = document.getElementById("sq3");
const sq4 = document.getElementById("sq4");
const sq5 = document.getElementById("sq5");
const sq6 = document.getElementById("sq6");
const sq7 = document.getElementById("sq7");
const sq8 = document.getElementById("sq8");

// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/


// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is