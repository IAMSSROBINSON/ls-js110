// program dependencies
const readline = require('readline-sync');

// constant variables
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

// print messages
function prompt (message) {
  console.log(`=> ${message}`);
}

// create a board
function createBoard () {
  let board = {};

  for (let index = 1; index <= 9; index++) {
   board[String(index)] = INITIAL_MARKER;
  }
  return board;
}

// display a board
function displayBoard (board) {
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');
}

// get user move
function getUserMove (board, marker) {
  let move;
  
  // get available spaces from object
  let availableSquares = getAvailableSquares(board); // returns an array of available number/keys
  console.log({availableSquares});

  prompt('What square will you place your marker on:');
  while(true) {
      move = readline.question().trim();
      if(getAvailableSquares(board).includes(move)) break;
  
      prompt(`Invalid entry! ${getAvailableSquares(board).join(', ')} only:`);
    }
  board[move] = marker; 
}

// get computer move
function getComputerMove (board, marker) {
  let move;
  
  // get available spaces from object
  let availableSquares = getAvailableSquares(board); // returns an array of available number/keys
  console.log({availableSquares});

  let randomIndex = Math.floor(Math.random() * getAvailableSquares(board).length);
  move = getAvailableSquares(board)[randomIndex];
  console.log(move)
  board[move] = marker; 
}

function getAvailableSquares (board) {
  return Object.keys(board).filter(squares => board[squares] === INITIAL_MARKER); // returns an array of available number/keys
}



let board = createBoard();
displayBoard(board);
getUserMove(board, HUMAN_MARKER);
displayBoard(board);
getComputerMove(board, COMPUTER_MARKER);
displayBoard(board);
let availableSquares = getAvailableSquares(board); // returns an array of available number/keys
  console.log({availableSquares});


// get computer move: computer needs to generate a random number between 1 - 9 but can only select from the available spaces. If the number selected is not in the available spaces array then select again until it is and then place a marker on the board

