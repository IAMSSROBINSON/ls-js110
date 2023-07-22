# The Main Game Loop

Previously:
- ask the user to select a square to mark
- have the computer choose its square move

Next:
- Loop the main functionality of the game so that a winner or a draw can be obtained
- Break out of the loop only when a winner or draw is obtained

<br>

## While (true) {} Loop

The game currently takes a userMove and auto generates a computerMove however this is not enough moves to complete a full game sequence. 

After the computer makes a move the turn should return to the userMove and then again the computerMove should follow sequentially until a winner is found.