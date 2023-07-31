# Computer Turn Refinements

1. Computer takes chance to win
   - This was taken care of by helping the computer to see if the potential for a winning square exists. If the potential exists the computer takes this move prior to it seeking out a threat and then if no threat is at bay then the computer chooses a random move.

2. Pick square 5
   - We can make one more improvement: pick square #5 if it's available. The AI for the computer should first pick the winning move, then the defensive move, then square #5, and, finally, a random square.
   - This can be added to the list of if statements that exists within the `getComputerMove` function. 
     - Square 5 will first need to be validated for its availability from the getAvailable squares function
     - If there is no opportunity to win and
     - If there is no threat and
     - If availableSquares(5) from board exists then
     - computerMove = 5
     - board[computerMove] = COMPUTER_MARKER


<br>