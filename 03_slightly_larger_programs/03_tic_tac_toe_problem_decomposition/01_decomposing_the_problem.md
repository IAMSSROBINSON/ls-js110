# Decomposing The Problem

## Understanding The Problem & Forming a Mental Model

## The Game
Tic Tac Toe
Nought & Crosses
Xs & Os

<br>

## The Rules
A two player game.
Players take successive turns marking a square on a 3 x 3 grid(board) with an X or an O.
The player who succeeds in first placing their marker in a horizontal, vertical or diagonal row is the winner. 
If the grid is full of markers(all 9 squares) and neither player has manged 3 markers in a row, the game is tied.

<br>

## Sequence of Game Play 

### high level pseudocode

1. Display the initial empty 3x3 board
2. Ask the user to mark a square
3. The Computer marks a square
4. Display the updated board state
5. If it is a winning board then display the winner
6. If the board is full display a tie
7. If neither play won and the board is not full go to step 2
8. Play again?  
9. If yes, go to step 1
10. Goodbye

<br>

## Two Main Loops

1. There are two main inner loops: Steps 2 => 7 that repeat for as long as there is no winner and the board isn't full. 

2. An outer loop: Steps 1 => 9 that repeats for as long as the player wants to keep playing.



