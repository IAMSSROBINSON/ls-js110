// Create a Tic Tac Toe Game
// 3 x 3 board of squares
// 2 players represented by X and O
// take turns to place their marker in a square (cannot be a taken square)
// whomever gets a line of markers wins horizontally or vertically wins
// if the board is full and no line of markers then the game is a tie

// we know that we will need a user input at some point so we should acquire the ability to take inputs using installing and require readline-sync into the program
const readline = require('readline-sync');

// we know we will have instruction messages to prompt the user towards so a prompt function would be good for easily displaying that
function prompt (message) {
  console.log(`=> ${message}`);
}

// we know there will be two players will two markers so lets set those up as constants to make referring to them easier and quicker
const USER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

// empty character space placeholder 
// replace this with any place that requires it for the layout 
const INITIAL_SPACE = ' ';

// the squares on the board will need to be selectable and manipulatable so lets set up a function that will enable this. An object key: value pair structure will best allow for this whereby the label names will correspond to the selectable and manipulatable squares of which there are 9 (1 - 9)
function createBoard () {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_SPACE;
  }
  return board;
}


// since we will need to display the board initially as well as updates to the board we should generate a function that can handle this repetitive nature 
// the displayBoard function will receive the board and manipulate the squares based on the board square provided
function displayBoard (board) {
  console.log('');
  console.log(`     |     |     `);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log(`     |     |     `);
  console.log('');
}

// create a function to create an array of available squares
function getAvailableSquares (board) {
  return Object.keys(board).filter(squares => board[squares] === " ");
}

// since the object[referencingNumbers] are just placeholder, lets replace them with an empty string constant that will be overwritten when a square is marked. It is important for it to be 1 space character length long " " since this will be the space occupied by the marker and would affect the layout if greater or smaller.

// let have the user select a square on the board to mark with their marker
// they should only be able to select the available board squares(unoccupied), I am generalizing this early because it will be required after the first move is made 
function getUserMove (board) {
  let userMove;
  let availableSquares = getAvailableSquares(board);
  console.log(availableSquares);
  prompt('Select a Square to mark:');
  while (true) {
    userMove = readline.question().trim();
    if(getAvailableSquares(board).includes(userMove)) break;

    prompt(`Enter valid entry! Numbers only: ${getAvailableSquares(board).join(', ')}`);
  }
  board[userMove] = USER_MARKER;
}

// get the computers move from the available and updated squares
// computer move should be random selection
function getComputerMove (board) {
  let availableSquares = getAvailableSquares(board);
  let randomNumberFromAvailableSquares = Math.floor(Math.random() * getAvailableSquares(board).length);
  let computerMove = getAvailableSquares(board)[randomNumberFromAvailableSquares];

  // mark the board with the computerMove
  board[computerMove] = COMPUTER_MARKER;
}

let board = createBoard();
displayBoard(board);
getUserMove(board);
displayBoard(board);
getComputerMove(board);
displayBoard(board);