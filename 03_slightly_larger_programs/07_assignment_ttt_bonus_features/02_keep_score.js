/*

install and require esLint:
- npm install eslint@7.12.1 eslint-cli babel-eslint --save-dev
- check version installed: npx eslint -v
- create a configuration file named `.eslintrc.yml` 
- check file: npx eslint fileName.js

*/

const READLINE = require("readline-sync");
const MESSAGES = require("./02_keep_score.messages.json");
const BOARD_SIZE = 9;
const SQUARE_PLACEHOLDER = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_COMBOS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function prompt(message) {
  console.log(`=> ${message}`);
}

function getBoard() {
  let board = {};

  for (let square = 1; square <= BOARD_SIZE; square++) {
    board[String(square)] = SQUARE_PLACEHOLDER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(``);
  console.log(`     |     |     `);
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}  `);
  console.log(`     |     |     `);
  console.log(``);
}

function getAvailableSquares(board) {
  return Object.keys(board).filter((squares) => board[squares] === " ");
}

function getUserMove(board) {
  let userMove = READLINE.question().trim();

  while (!getAvailableSquares(board).includes(String(userMove))) {
    prompt(
      `${MESSAGES.invalidSquare} ${joinerOr(
        getAvailableSquares(board),
        "; ",
        " and "
      )}`
    );
    userMove = READLINE.question();
  }

  board[userMove] = USER_MARKER;
}

function getComputerMove(board) {
  let randomNumber = Math.floor(
    Math.random() * getAvailableSquares(board).length
  );
  let computerMove = getAvailableSquares(board)[randomNumber];
  board[computerMove] = COMPUTER_MARKER;
}

function joinerOr(array, delimiter = ", ", word = "or") {
  if (array.length <= 1) {
    return array;
  }
  return (
    array.slice(0, array.length - 1).join(`${delimiter}`) +
    word +
    array.slice(array.length - 1)
  );
}

function isWinner(board) {
  return (
    WINNING_COMBOS.some((arrayOfCombos) =>
      arrayOfCombos.every((element) => board[element] === USER_MARKER)
    ) ||
    WINNING_COMBOS.some((arrayOfCombos) =>
      arrayOfCombos.every((element) => board[element] === COMPUTER_MARKER)
    )
  );
}

function isNoSquaresLeft(board) {
  return getAvailableSquares(board).length === 0;
}

function getWinner(board) {
  let winner;
  if (
    WINNING_COMBOS.some((arrayOfCombos) =>
      arrayOfCombos.every((element) => board[element] === USER_MARKER)
    )
  ) {
    winner = MESSAGES.userName;
  } else {
    winner = MESSAGES.computerName;
  }

  return winner;
}

function scoreManager () {
  let score = 0;

  function getScore () {
    return score;
  }

  function increaseScore () {
    score += 1;
  }

  return {getScore, increaseScore};
}

function incrementWinnerScore (userOrComputer, userPlayer, computerPlayer) {
  if (userOrComputer === 'User') {
    userPlayer.increaseScore();
  } else {
    computerPlayer.increaseScore();
  }
}

function displayScores (userPlayer, computerPlayer) {
  console.log('');
  prompt(`Scores:`);
  prompt(`User: ${userPlayer.getScore()}`);
  prompt(`Computer: ${computerPlayer.getScore()}`);
  console.log('');
}

// MAIN PROGRAM
(function startProgram () {

prompt(MESSAGES.welcome + "\n");

let userPlayer = scoreManager();
let computerPlayer = scoreManager();

while (true) {
  let board = getBoard();
  displayBoard(board);

  while (true) {
    prompt(
      `${MESSAGES.select} ${joinerOr(getAvailableSquares(board), ", ", " or ")}`
    );

    getUserMove(board);
    displayBoard(board);
    if (isNoSquaresLeft(board) || isWinner(board)) break;

    getComputerMove(board);
    displayBoard(board);
    if (isNoSquaresLeft(board) || isWinner(board)) break;
  }

  if (isWinner(board)) {
    prompt(`${MESSAGES.winnerIs} ${getWinner(board)}`);
    incrementWinnerScore(getWinner(board), userPlayer, computerPlayer);
  } else {
    prompt(MESSAGES.tiedGame);
  }
  displayScores(userPlayer, computerPlayer);

  prompt(MESSAGES.playAgain);
  let playAgain = READLINE.question();
  if (playAgain[0].toLowerCase() !== "y") {
    prompt(MESSAGES.goodbye);
    break;
  }
}

})();