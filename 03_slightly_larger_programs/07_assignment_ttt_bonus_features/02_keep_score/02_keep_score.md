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
    - create a playerScore function
    - set a variable for userScore = playerScore()
    - set a variable for computerScore = playerScore()
      - set a variable score = 0;
      - declare a nested function to get the score
      - declare a nested function to increment the score
      - return an object(containing the functions) to the caller using encapsulation

  implicit:

questions:
n/a

## E: Examples and Test Cases

Game: 1
=> You are: O.
=> The Computer is: X.

     |     |     
  O  |  O  |  O  
     |     |     
-----+-----+-----
     |     |     
  X  |  X  |     
     |     |     
-----+-----+----
     |     |     
     |     |     
     |     |     

=> User Won!

Scores:
User: 1
Computer: 0

=> Would you like to play again? y/n

- - - - - - - - - - - -

Game: 2
=> You are: O.
=> The Computer is: X.

     |     |     
  O  |  O  |  O  
     |     |     
-----+-----+-----
     |     |     
  X  |  X  |     
     |     |     
-----+-----+----
     |     |     
     |     |     
     |     |     

=> User Won!

Scores:
User: 2
Computer: 0

=> Would you like to play again? y/n

- - - - - - - - - - - -

'A few games later..' (french accent voice)

Game: 6
=> You are: O.
=> The Computer is: X.

     |     |     
  O  |  O  |  O  
     |     |     
-----+-----+-----
     |     |     
  X  |  X  |     
     |     |     
-----+-----+----
     |     |     
     |     |     
     |     |     

=> User Won!

Scores:
User: 5
Computer: 1

** User is the Grand Match Winner! **

=> Would you like to play again? y/n

- - - - - - - - - - - -

Game: 1
=> You are: O.
=> The Computer is: X.

     |     |     
  X  |  X  |  X  
     |     |     
-----+-----+-----
     |     |     
  O  |  O  |     
     |     |     
-----+-----+----
     |     |     
     |     |     
     |     |     

=> Computer Won!

Scores:
User: 0
Computer: 1

=> Would you like to play again? y/n

- - - - - - - - - - - -

<br>

## D: Data Structure

I will use closures and encapsulation to contain both the user and computer scores and retrieve the score and increment the score within a function that returns an object giving access to this functionality. This will allow for not using global variables for each players score count thereby protecting the variables from potential unintentional reassignment or otherwise.

<br>

## A: Algorithm

- within the main program flow:
  - set a variable for let userScore = playerScore();
  - set a variable for let computerScore = playerScore();
- set a playerScore function
- set a variable score = 0;
- declare a nested function to get the score: getScore
  - return score;
- declare a nested function to increment the score: incrementScore
  - return score += 1;
- return an object(containing the functions) to the caller using encapsulation
  - return {getScore: getScore(), incrementScore: incrementScore() }

- When the winner is determined by the getWinner() function
  - if the winner is the user: call userScore.incrementScore();
    - call ComputerScore.getScore();
    - call UserScore.getScore();
    - display the scores of players (see Examples and Test cases above)
    - try to extract the functionality so that the winner can be passed into a function and the results are performed declaratively.
