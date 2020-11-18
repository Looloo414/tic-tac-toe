// --------------CONSTANTS----------
const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// -------------VARIABLES------------
let board, turn, winner;

// --------------CACHED ELEMENTS--------
const cellElements = document.querySelectorAll('.cell');
const winningMessageText = document.querySelector('.winning-message');
const startOver = document.querySelector('.reset-button');

// --------------EVENT LISTENERS------------
startOver.addEventListener('click', initiate);

cellElements.forEach(cell => {
    cell.addEventListener('click', handleCellClick, { once: true})
});


// --------------FUNCTIONS--------------------
initiate();

function initiate() {
    board = [ '', '', '', '', '', '', '', '', ''];
    turn = 1;
    winner = null;
    render();
}

function handleClick(click) {
    let idx = parseInt(click.target.id);
    if (board[idx] != "null") {
        return;
    }
    board[idx] = turn;
    turn *= -1;
    winner = theWinner(idx);
    render();
}

function theWinner(idx) {
    if (
        board[0] + board[1] + board[2] === 3 ||
        board[3] + board[4] + board[5] === 3 ||
        board[6] + board[7] + board[8] === 3 ||
        board[0] + board[3] + board[6] === 3 ||
        board[1] + board[4] + board[7] === 3 ||
        board[2] + board[5] + board[8] === 3 ||
        board[0] + board[4] + board[8] === 3 ||
        board[6] + board[4] + board[2] === 3 
    ) {
        return 1;
    }
    if (
        board[3] + board[4] + board[5] === -3 ||
        board[6] + board[7] + board[8] === -3 ||
        board[0] + board[1] + board[2] === -3 ||
        board[0] + board[3] + board[6] === -3 ||
        board[1] + board[4] + board[7] === -3 ||
        board[2] + board[5] + board[8] === -3 ||
        board[0] + board[4] + board[8] === -3 ||
        board[6] + board[4] + board[2] === -3 
    ) {
        return -1;
    }
}

// const initiate = (e) => {
//     console.log(e);
// };

// const handleCellClick = (e) => {
//     // console.log(e.target);
//     const location = e.target.classList[1];

//     if(xTurn) {
//         console.log(e.target);
//     }
// }



   













// !!CODE THAT DIDN'T WORK!! IT RESULTED IN IT ALWAYS BEING A TIE




/*-------------------------------- Constants --------------------------------*/
// const playerX = "x"
// const playerO = "o"

// const colors = { 
//     player1: 'red',
//     player2: 'blue',
//     null: 'white'
// }

// const winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)

// let oTurn

/*------------------------ Cached Element References ------------------------*/
// const cellElements = document.querySelectorAll('[data-cell]')
// const winningMessageText = document.querySelector('.winning-message')

// const startOver = document.querySelector('.resetButton')


// You might choose to put your game status here

/*----------------------------- Event Listeners --------------------------*/

// cellElements.forEach(cell => {
//     cell.addEventListener('click', handleClick, { once: true})
// });



/*-------------------------------- Functions --------------------------------*/


// function initiate() {
//     oTurn = false;
//     cellElements.forEach(cell => {
//         cell.classList.remove(playerO)
//         cell.classList.remove(playerX)
//         cell.removeListeners('click', handleClick)
//         cell.addEventListener('click', handleClick, { once: true})
//     })
// };
// initiate();

// // function handleClick(e) {
// //     let idx = parseInt(e.target.id);
// //     if (board[idx] != 'null') {
// //         return;
// //     }
// //     swapTurns()
// // }

// function handleClick(e) {
//     const cell = e.target
//     const currentClass = oTurn ? playerO : playerX 
//     placeMark(cell, currentClass)
//     if (winner(currentClass)){
//         endGame(false)
//     } else if (isTie()) {
//         endGame(true) 
//     } else {
//     swapTurns()
//     }
// };

// function endGame(tie){
//     if (tie) {
//         winningMessageText.innerText = "It's a Tie!"
//     } else {
//         winningMessageText.innerText = `${oTurn ? "O" : "X"} Wins!`
//     }
//     winningMessage.classList.add('show')
// }

// function isTie() {
//     return [...cellElements].every(cell => {
//         return cell.classList.contains(playerX) || cell.classList.contains(playerO)
//     })
// }

// function placeMark(cell, currentClass) {
//     cell.classList.add(currentClass)

// };

// function clear() {
//     board = [ '', '', '', '', '', '', '', '', ''];
//     initiate();
// }

// function swapTurns() {
//     oTurn = !oTurn
// };

// function winner(currentClass) {
//     winningCombinations.some(combination => {
//         return combination.every(index => {
//             return cellElements[index].classList.contains(currentClass)
//         })
//     })
// }




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