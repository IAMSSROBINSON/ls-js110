# Improve Game Loop

Create a generic function that marks a square based on which player is making a move e.g. `chooseSquare(board, currentPlayer)`;
When that players move has been made a function could switch the player e.g.`currentPlayer = alternatePlayer(currentPlayer)`;
Then we would not have to check the validation functions as often e.g. 
`if (someoneWon(board) || boardFull(board)) break;`
This would all be presented in a loop.

<br>

## `chooseSquare(board, currentPlayer)`

- invoke the chooseSquare function
- pass in the board and the currentPlayer
  - How do we know who the currentPlayer is?