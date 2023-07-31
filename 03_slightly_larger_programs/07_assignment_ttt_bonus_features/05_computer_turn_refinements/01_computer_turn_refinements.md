# Computer Turn Refinements

1. Computer takes chance to win
   - This was taken care of by helping the computer to see if the potential for a winning square exists. If the potential exists the computer takes this move prior to it seeking out a threat and then if no threat is at bay then the computer chooses a random move.

2. Pick square 5
   - We can make one more improvement: pick square #5 if it's available. The AI for the computer should first pick the winning move, then the defensive move, then square #5, and, finally, a random square.
   - This can be added to the list of if statements that exists within the `getComputerMove` function. 
     - Square 5 will first need to be validated for its availability from the getAvailable squares function
     - If there is no opportunity to win and
     - If there is no threat and
     - If availableSquares('5') from board exists then
       - '5' is a string since it is generated from the board 
     - computerMove = '5'
       - Make '5' a constant and replace the variable in its place
     - board[computerMove] = COMPUTER_MARKER

3. Can you change the game so that the computer moves first? See if you can make this a setting at the top of the program (i.e., a constant) so that you can play the game with either the player or computer going first. Try adding a 3rd option that causes your game to prompt the user for who goes first before play begins. Valid options for the constant used in this feature can be "player", "computer", or "choose".

- When the game starts currently the user is greeted and then a list of the rules is displayed before the game starts automatically.

- The first prompt then asks the users for their input as to the users first move.

- How do we get the first prompt to be a selection of who should go first in the game?

- prompt the user for a selection of who should play first:

Currently the order of the player who goes first is determined by the order of the functions:

getUserMove()
getComputerMove()

Since getUserMove() appears before getComputerMove() the User is the first player to pick a square.

We could create a const array with both players and have the computer pick the player to go first at random:
  - const whoGoesFirst = ['COMPUTER', 'USER']
  - let randomWhoGoesFirst = Math.floor(Math.random() * whoGoesFirst.length)
    - this should be invoked from within a self invoked function 
  - const playerToGoFirst = whoGoesFirst[randomWhoGoesFirst];
    - playerToGoFirst should be initialized in the main gain loop

  - use/if/else statements with the potential orders:
    - if (playerToGoFirst === 'user') {
          - user first
            - // run program functions
          - computer second
            - // run program functions
    - }
    - else {
          - computer first
            - // run program functions
          - user second
            - // run program functions
    - }

  - add choose option as a third option in the array that prompts the user to enter the order if randomly selected

<br>