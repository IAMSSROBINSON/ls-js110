# Computer AI: Defensive

The computer currently picks a square at random. That's not very interesting. Let's make the computer defensive-minded so that, when an immediate threat exists, it will try to defend the 3rd square. An immediate threat occurs when the human player has 2 squares in a row with the 3rd square unoccupied. If there's no immediate threat, the computer can pick a random square.

<br>

## P: Understanding The Problem

Create a function  
When it is the computers turn to place a marker  
First check if the User has occupied (with their marker) 2 out of 3 squares in the winning_combos array of nested winner combo arrays.  
If the user has occupied 2 squares with the potential for a win on the 3rd then return that winning combo array and have the computer select the unoccupied square.  

Input: board(object of occupied squares(with markers) and unoccupied squares thus far in the game)  
Output: array combo where 2 squares are occupied(===) with the USER_MARKER 'X'  
Rules:
  Explicit:  
  - must identify 2 occupied squares from at least 1 array in the WINNING_COMBOS arrays
    - this will leave 1 square === ' '; 
    - the computer should select this square for its move to save the same  


  Implicit:  
  - n/a

Questions:  
  - there may be more than 1 array identified with 2 occupied squares, what will you do?  
    - return the first array    

<br>

## E: Examples and Test Cases  
```JavaScript
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

board:
     |     |     
  X  |  X  |     
     |     |     
-----+-----+-----
     |     |     
  X  |     |  O  
     |     |     
-----+-----+-----
     |     |     
  O  |     |    
     |     |     

board object:
{
  '1': 'X',
  '2': 'X',
  '3': ' ',
  '4': 'X',
  '5': ' ',
  '6': 'O',
  '7': 'O',
  '8': ' ',
  '9': ' '
}
```

Mental Model:
- From the board object we can see the occupied and unoccupied squares.  
- When comparing the board object keys occupied and the USER_MARKER value('X') with the WINNING_COMBOS array we see that one of the nested arrays: [1, 2, 3] has 2/3 elements of the array === USER_MARKER with one element unoccupied:  

WINNING_COMBOS: [[1, 2, 3]]   

Occupied:  
board['1'] === 'X'  
board['2'] === 'X  
board['4'] === 'X'  

Unoccupied threat:  
board['3'] === ' '  

<br>

## D: Data Structure
Array: I will potentially utilize an array structure to filter out required values.  

<br>

## A: Algorithm  

Informal:  
- Before the computer randomly selects an available square

- Create a function that finds out if there is a threat square(a square that will enable the User to win by completing a WINNING_COMBO)  
  
- get the first array that is a threat:  
- array.find(theFirstNestedArrayAsThereMayBeMoreThanOne) in the WINNING_COMBOS array:
  that meets one of these tests:  
  - iterate over the winningCombos array(with nested arrays)  
  - test to make sure 2 out of 3 squares are occupied by the userMarker and 1 square is available  
    - For each nested array inside of the winningCombos array:  
    - return the first array that matches these conditions and save to variable threatArray:  
    (board[nestedArray[0]] === USER_MARKER &&
        board[nestedArray[1]] === USER_MARKER) && board[nestedArray[2]] === ' ' ||
      (board[nestedArray[1]] === USER_MARKER &&
        board[nestedArray[2]] === USER_MARKER) && board[nestedArray[0]] === ' ' ||
      (board[nestedArray[0]] === USER_MARKER &&
        board[nestedArray[2]] === USER_MARKER && board[nestedArray[1]] === ' ')  
  - e.g. let threatArray = [ 1, 2, 3 ]  
  
- use the availableSquares function to return a list of the available squares   
  - e.g. [3, 5, 8, 9]   

- iterate over the available squares and set a currentSquare variable  
  - nest a loop and iterate over the threatArray  
    - if currentSquare matches one of the values in the threatArray then set to computers move  
    - e.g. 3

Formal:  
Since this will require some manipulation to integrate into the flow of the program as it stands a formal  rendition of the algorithm will not be useful since some juggling will occur.

<br>

## C: Code With Intent  
[link to code](./01_computer_ai_defensive.js)  