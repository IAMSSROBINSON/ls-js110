# Create a New Board

Creating a function that returns an initial board.

```JavaScript
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

function initializeBoard () {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }
  return board;
}

let board = initializeBoard();
displayBoard(board);

// The initializeBoard function creates and initializes an empty object, uses a loop to populate the object keys from 1 - 9, with an empty string space character ' ' and then returns that object.

// Example initial board object entry:
// let board = {
//   1: ' ', // top left
//   2: ' ', // top center
//   3: ' ', // top right
//   4: ' ', // middle left
//   5: ' ', // middle centre
//   6: ' ', // middle right
//   7: ' ', // bottom left
//   8: ' ', // bottom center
//   9: ' ', // bottom right
// }
```
