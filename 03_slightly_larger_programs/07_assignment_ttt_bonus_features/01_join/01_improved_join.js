const readline = require('readline-sync');
const INITIAL_SPACE = ' ';
const USER_MARKER = 'O';
const COMPUTER_MARKER = 'X';
let WINNING_COMBOS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function prompt (message) {

  console.log(`=> ${message}`);
}

function getBoard () {

  let board = {};

  for (let key = 1; key <= 9; key++) {
    board[String(key)] = INITIAL_SPACE;
  }
  return board;
}

function getAvailableSquares (board) {

  return Object.keys(board).filter(key => board[key] === ' ');
}

function displayBoard (board) {
  console.clear();

  prompt(`You are: ${USER_MARKER}.`)
  prompt(`The Computer is: ${COMPUTER_MARKER}.`);
  
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');
}

function getUserMove (board) {

  let userMove;

  prompt(`Please enter your move ${joinOr(getAvailableSquares(board))} `);

  while (true) {
    userMove = readline.question().trim();
    if (getAvailableSquares(board).includes(userMove)) break;

    prompt(`Please select a valid square: ${joinOr(getAvailableSquares(board), '; ', 'and')}`);
  }
  board[userMove] = USER_MARKER;
}

function getComputerMove (board) {
  
  let randomIndex = Math.floor(Math.random() * getAvailableSquares(board).length);
  let computerMove = getAvailableSquares(board)[randomIndex];
  board[computerMove] = COMPUTER_MARKER;
}

function isWinner (board) {

  return !!getWinner(board);
}

function getWinner(board) {
  
for (let comboArrIndex = 0; comboArrIndex < WINNING_COMBOS.length; comboArrIndex++) {
  if (WINNING_COMBOS[comboArrIndex].every(key => board[String(key)] === USER_MARKER)) {
    return 'User';
  } 
  else if (WINNING_COMBOS[comboArrIndex].every(key => board[String(key)] === COMPUTER_MARKER)) {
    return 'Computer';
  } 
}
  return null;
}

function isBoardFull (board) {
  let availableSquares = getAvailableSquares(board);
  return availableSquares.length === 0;
}

function joinOr (array, delimiter = ', ', stringInsert = 'or') {
  let string = '';
  if (array.length === 0) {
    return string;
  } else if (array.length > 1) {
    string = array.slice(0, (array.length - 1)).join(delimiter) + " " + stringInsert + " " + array.slice(array.length - 1);
  } else {
    array[0];
  }
  return string;
}


while (true){
  let board = getBoard();

while (true) {
  displayBoard(board);
  getUserMove(board);
  if (isWinner(board) || isBoardFull(board)) break;

  getComputerMove(board);
  if (isWinner(board) || isBoardFull(board)) break;
} 


displayBoard(board);

if (isWinner(board)) {
    prompt(`${getWinner(board)} Won!`);
  } else {
    prompt(`The Game Is Tied.`);
  }

prompt(`Would you like to play again? y/n`);
let playAgain = readline.question().trim().toLowerCase()[0];
if (playAgain !== 'y') break;
}
prompt(`Thank you for playing Tic Tac Toe!`);


