# Computer AI: Offensive

The defensive-minded AI is pretty cool, but it's still not performing as well as possible. If there are no impending threats, it will pick a square at random. We can improve it by attempting to find a winning move. We're not going to add a complicated algorithm; instead, we'll piggyback on findAtRiskSquare and turn it into an attacking mechanism as well. The logic is simple:

Finding a defensive-minded square means finding an empty square in a line where the other two squares belong to the human player.
Finding an offensive-minded square means finding an empty square in a line where the other two squares belong to the computer.

<br>

## P: Understanding The Problem

When it is the computers turn to place a square it first checks whether there is a threatSquare it can select as its move so that it does not immediately lose the game. 

The computer should first check to see if there is a square it can select as its move so that it can win the game and then it can check if there is a threat square to protect itself from losing the game

Input: 
  - current state of the: 'board', 
  -  are there two squares from the WINNING_COMBOS constant variable that are occupied by the COMPUTER_MARKER with the third square being available === ' ';
  
Output: The board[square] 'number' that is  available === ' '; 
  - availableSquares

Rules:
  Explicit: 
  - must be based on the current state of the board
  - must find a winning move if available and select that move before checking for a threatSquare

  Implicit:
  - n/a

<br>

## E: Examples and Test Cases

- The user has made a move and it is now the computers turn
- The computer checks the current board to see if it has occupied 2 squares with its marker from the WINNING_COMBOS list and if a third square in the list is available(=== ' ')
  - If yes then computerMove should become this empty square so computer can win the game
  - If no then return false and let computer check for a threatSquare to save the same from a loss
  - If no threat square then choose a square at random

<br>

## D: Data Structure

Array: We will utilize the array and function structures already built but we will tweak the functions especially to become generic and return the desired result based on the arguments passed in. This will allow the functions to be used for more than one purpose with differing results.

<br>

## A: Algorithm

- Make the `getThreatSquare` function generic so that the results are dependant on the players marker that is passed in.

- This will allow the function to identify both if a threat exists from the USER_MARKER when passing the USER_MARKER and will also allow for identifying if the COMPUTER_MARKER poses and threat to the user - thereby allowing the computer to identify a square it can take to win the game.

- add to the if statement in getComputerMove so that it initially checks for a winning move and pass in the COMPUTER_MARKER in the same way that the USER_MARKER is passed to find a threatSquare
<br>

## C: Code With Intent
[Link to code](./01_computer_ai_offensive.js)