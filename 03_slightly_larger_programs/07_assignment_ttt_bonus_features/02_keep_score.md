# Keep Score

Keep track of how many times the player and computer each win, and report the scores after each game. The first player to win 5 games wins the overall match (a series of 2 or more games). The score should reset to 0 for each player when beginning a new match. Don't use any global variables. However, you may want to use a global constant to represent the number of games needed to win the match.

<br>

## P: Understanding The Problem

Clarification:
Currently the game runs until either the user or the computer win or tie a single game. The user may then choose to play again or quit the program. There is no tally by which to count how many games either player wins.
- Create functionality that keeps track of the user and computer wins. 
- Display the scores for both players after each game decision.
- The first player amass 5 wins is the Grand Winner - display this as a message and set the scores back to zero.
- Do not use global variables for the win counts
- Do use a global variable for Grand Match Winner count (5)
  
input: getWinner function
output: display score at the same time as the board(displayBoard function)
rules:
  explicit:
  - do not user global count variables
  - use encapsulation
    - create a userScore function
    - create a computerScore function
      - set a variable score = 0;
      - declare a nested function to get the score
      - declare a nested function to increment the score
      - return the functions within an object