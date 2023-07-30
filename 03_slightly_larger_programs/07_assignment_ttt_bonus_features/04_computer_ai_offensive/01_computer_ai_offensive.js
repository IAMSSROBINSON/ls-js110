const READLINE = require("readline-sync");
const MESSAGES = require("./01_computer_ai_defensive.json");
const BOARD_SIZE = 9;
const SQUARE_PLACEHOLDER = " ";
const USER_MARKER = "X";
const COMPUTER_MARKER = "O";
const GRAND_WINNER = 5;
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
  prompt(`${MESSAGES.displayUserMarker} ${USER_MARKER}`);
  prompt(`${MESSAGES.displayComputerMarker} ${COMPUTER_MARKER}`);

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
      `${MESSAGES.promptInvalidSquare} ${joinerOr(
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
  let computerMove;

  if (isThreat(board)) {
    computerMove = getThreat(board);
  } else {
    let randomNumber = Math.floor(
      Math.random() * getAvailableSquares(board).length
    );
    computerMove = getAvailableSquares(board)[randomNumber];
  }
  board[computerMove] = COMPUTER_MARKER;
}

function getThreat(board) {
  let computerMove;
  let availableSquares = getAvailableSquares(board);

  let threatArray = isThreat(board);

  for (let index = 0; index < availableSquares.length; index++) {
    let currentAvailableSquare = availableSquares[index];

    for (let idx = 0; idx < threatArray.length; idx++) {
      if (currentAvailableSquare === String(threatArray[idx])) {
        computerMove = currentAvailableSquare;
        break;
      }
    }
  }
  return computerMove;
}

function isThreat(board) {
  return WINNING_COMBOS.find((nestedArray) => {
    return (
      (board[nestedArray[0]] === USER_MARKER &&
        board[nestedArray[1]] === USER_MARKER &&
        board[nestedArray[2]] === " ") ||
      (board[nestedArray[1]] === USER_MARKER &&
        board[nestedArray[2]] === USER_MARKER &&
        board[nestedArray[0]] === " ") ||
      (board[nestedArray[0]] === USER_MARKER &&
        board[nestedArray[2]] === USER_MARKER &&
        board[nestedArray[1]] === " ")
    );
  });
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
    winner = MESSAGES.displayUserName;
  } else {
    winner = MESSAGES.displayComputerName;
  }

  return winner;
}

function scoreManager() {
  let score = 0;

  function getScore() {
    return score;
  }

  function increaseScore() {
    score += 1;
  }

  function resetScore() {
    score = 0;
  }

  return { getScore, increaseScore, resetScore };
}

function incrementWinnerScore(userOrComputer, userPlayer, computerPlayer) {
  if (userOrComputer === "User") {
    userPlayer.increaseScore();
  } else {
    computerPlayer.increaseScore();
  }
}

function displayScores(userPlayer, computerPlayer) {
  console.log("");
  prompt(`${MESSAGES.displayScoresHeader}`);
  prompt(`${MESSAGES.displayUserName}: ${userPlayer.getScore()}`);
  prompt(`${MESSAGES.displayComputerName}: ${computerPlayer.getScore()}`);
  console.log("");
}

function isGrandWinner(userPlayer, computerPlayer) {
  return (
    userPlayer.getScore() === GRAND_WINNER ||
    computerPlayer.getScore() === GRAND_WINNER
  );
}

function displayGrandWinner(winner, userPlayer, computerPlayer) {
  prompt(`${winner}${MESSAGES.displayGrandWinner}`);

  userPlayer.resetScore();
  computerPlayer.resetScore();
}

// MAIN PROGRAM
console.log('')
prompt(MESSAGES.displayWelcome);
prompt(MESSAGES.displayRules1);
prompt(MESSAGES.displayRules2);
prompt(MESSAGES.displayRules3);
prompt(MESSAGES.displayReadToPlay);
setTimeout(startProgram, 9000);

function startProgram() {

  let userPlayer = scoreManager();
  let computerPlayer = scoreManager();

  while (true) {
    let board = getBoard();
    displayBoard(board);

    while (true) {
      prompt(
        `${MESSAGES.promptSelect} ${joinerOr(
          getAvailableSquares(board),
          ", ",
          " or "
        )}`
      );

      getUserMove(board);
      displayBoard(board);
      if (isNoSquaresLeft(board) || isWinner(board)) break;

      getComputerMove(board);
      displayBoard(board);
      if (isNoSquaresLeft(board) || isWinner(board)) break;
    }

    if (isWinner(board)) {
      prompt(`${MESSAGES.displayWinnerIs} ${getWinner(board)}`);
      incrementWinnerScore(getWinner(board), userPlayer, computerPlayer);
    } else {
      prompt(MESSAGES.displayTiedGame);
    }
    displayScores(userPlayer, computerPlayer);
    if (isGrandWinner(userPlayer, computerPlayer)) {
      displayGrandWinner(getWinner(board), userPlayer, computerPlayer);
    }

    prompt(MESSAGES.promptPlayAgain);
    let playAgain = READLINE.question();
    if (playAgain[0].toLowerCase() !== "y") {
      prompt(MESSAGES.displayGoodbye);
      break;
    }
  }
};
