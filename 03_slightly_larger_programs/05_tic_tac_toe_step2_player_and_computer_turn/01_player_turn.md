# Player Turn

Previously:

- function that creates a data structure to create initial game board √
- function to display game board with string interpolation through template literals √

<br>

Next:

- ask the user to select a square to mark
- have the computer choose its square move

<br>

## Player Chooses Square Function

- think about the function input (its arguments)
- pass a board object to the function since the board must be mutated after the player chooses a square

```JavaScript
function playerChoosesSquare (board) {
  
}
```

- declare a variable to store the usersChoiceOfSquare
- find out which squares are available
- validate the usersChoiceOfSquare
  - should be '1 - 9' only
  - should be an available square
  - should not be empty string
- if the usersChoiceOfSquare is valid then assign an 'X' to the square chosen and update and display the board

<br>

## Computer Chooses Square Function

- computer will choose at random an available square from the available squares array
- update and display on the board
