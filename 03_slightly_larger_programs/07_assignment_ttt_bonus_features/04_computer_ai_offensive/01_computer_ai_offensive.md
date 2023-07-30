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



<br>

## D: Data Structure




<br>

## A: Algorithm




<br>

## C: Code With Intent