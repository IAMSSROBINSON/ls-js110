const READLINE = require('readline-sync');
const MESSAGES = require('./02_keep_score.messages.json')
const BOARD_SIZE = 9;
const SQUARE_PLACEHOLDER = ' ';

function prompt (message) {
  console.log(`=> ${message}`);
}

function getBoard () {
  let board = {};

  for (let square = 1; square <= BOARD_SIZE; square++) {
    board[square] = SQUARE_PLACEHOLDER;
  }
  return board;
}


// MAIN PROGRAM
prompt(MESSAGES.welcome + '\n');
prompt(MESSAGES.select);

let board = getBoard();
console.log(board);

