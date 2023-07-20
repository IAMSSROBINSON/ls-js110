# Display Board for in Progress Game

After each move, the center space of the selected square needs to be replaced with the marker (X or O) to denote that the player has chosen it. 

After 3 moves the board might look like this:

```JavaScript
console.log('');
console.log('     |     |     ');
console.log('  X  |     |     ');
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log('     |  O  |     ');
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log('     |     |  X  ');
console.log('     |     |     ');
console.log('');
```

Since the board will appear frequently it is probably best to extract the functionality to a function.

<br>

## Initial state of the board:

```JavaScript
function displayBoard () {
console.log('');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('     |     |     ');
console.log('');
}

// it could be better to accept a board as an argument and should display the board based on the arguments passed
```

<br>

## How to Represent a Board with a Data Structure?

The board is the main data structure of the program so how the data is represented is quite important:

```JavaScript
// 9 elements each representing a potential move on the board
// array used for ease of linking the index position to the equivalent square on the board

[
  'X', 'O', '', 
  'O', 'X', '', 
  '', '', 'X'
  ];

// OR NESTED ARRAY:

[
  ['X', 'O', ''],
  ['O', 'X', ''],
  [ '', '', 'X']
]

// OR OBJECT
// each key represents a specific square numbered 1 - 9

let board = {
  1: 'X', // top left
  2: '', // top center
  3: '', // top right
  4: '', // middle left
  5: 'O', // middle centre
  6: '', // middle right
  7: '', // bottom left
  8: '', // bottom center
  9: 'X', // bottom right
}
```

<br>

## Passing the Board as an Argument

```JavaScript
// string based indices are used to access values from the board
function displayBoard (board) {
console.log('');
console.log('     |     |     ');
console.log(`  ${board['1']}  |   ${board['2']}  |  ${board['3']}  `);
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log(`   ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
console.log('     |     |     ');
console.log('-----+-----+-----');
console.log('     |     |     ');
console.log(`   ${board['7']}  |   ${board['8']}  |  ${board['9']}  `);
console.log('     |     |     ');
console.log('');
}

// Data Structure:
// values represented as a space until marked
let board = {
  1: 'X', // top left
  2: ' ', // top center
  3: ' ', // top right
  4: ' ', // middle left
  5: 'O', // middle centre
  6: ' ', // middle right
  7: ' ', // bottom left
  8: ' ', // bottom center
  9: 'X', // bottom right
}

// pass board to the function
displayBoard(board)
```