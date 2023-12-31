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
const WINNING_COMBOS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['7', '5', '3']];

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



/*

from the current board - find out if there is a winner

getWinner (board) {

}

board looks like this currently:

{
  '1': ' ',
  '2': ' ',
  '3': 'O',
  '4': ' ',
  '5': 'X',
  '6': ' ',
  '7': ' ',
  '8': ' ',
  '9': ' '
}

Winning combination of square keys that need to be filled with the same marker value:

['1', '2', '3'] / ['O', 'O', 'O']
['4', '5', '6'] / ['X', 'X', 'X']
['7', '8', '9'] / ect.. 

['1', '4', '7']
['2', '5', '8']
['3', '6', '9']

['1', '5', '9']
['7', '5', '3']


- using the winning combinations arrays
- iterate over each of the arrays separately
- if all the element(key)s in any of the arrays have an objectValue === aParticularMarker then there is a winner
- determine the marker that the match returned true for and display the winner
- if you filter the object values out that are === ' ' and the length of the returned array is 9 then all the values have been filled. If there is no winner still at that point then it is a tie.
- display game tied


WINNING COMBOS:
 const WINNING_COMBOS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['7', '5', '3']];

*/

function isWinner (obj, marker) {

  return WINNING_COMBOS.some((arr)=>{
    return arr.every((element)=>{
      return obj[element] === marker;
    })
  })
  }

let board = createBoard();
displayBoard(board);
getUserMove(board);
displayBoard(board);
getComputerMove(board);
displayBoard(board);
console.log(isWinner(board, USER_MARKER));
console.log(isWinner(board, COMPUTER_MARKER));
