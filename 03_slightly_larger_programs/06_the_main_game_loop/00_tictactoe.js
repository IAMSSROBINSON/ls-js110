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

  prompt(`Please enter your move ${getAvailableSquares(board).join(', ')} `);

  while (true) {
    userMove = readline.question().trim();
    if (getAvailableSquares(board).includes(userMove)) break;

    prompt(`Please select a valid square: ${getAvailableSquares(board).join(', ')}`);
  }
  board[userMove] = USER_MARKER;
}

function getComputerMove (board) {
  
  let randomIndex = Math.floor(Math.random() * getAvailableSquares(board).length);
  let computerMove = getAvailableSquares(board)[randomIndex];
  board[computerMove] = COMPUTER_MARKER;
}

function isWinner (board) {

  return getWinner(board);
}

function getWinner(board) {
  
for (let comboArrIndex = 0; comboArrIndex < WINNING_COMBOS.length; comboArrIndex++) {
  if (WINNING_COMBOS[comboArrIndex].every(key => board[String(key)] === USER_MARKER)) {
    return USER_MARKER;
  } 
  if (WINNING_COMBOS[comboArrIndex].every(key => board[String(key)] === COMPUTER_MARKER)) {
    return COMPUTER_MARKER;
  } 
}
  return null;
}

let board = getBoard();

while (true) {
  
  displayBoard(board);

  getUserMove(board);
  console.clear();
  getComputerMove(board);

  if (isWinner(board)) {
      displayBoard(board);
      if (isWinner(board) === USER_MARKER) {
        prompt(`${USER_MARKER}: You Won!`);
      } else {
        prompt(`${COMPUTER_MARKER} : Computer Won!`);
      }
      break;
    } else if (getAvailableSquares(board).length === 0) {
      displayBoard(board);
      prompt(`The game is tied.`);
      break;
    }
}

