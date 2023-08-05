# Tic Tac Toe: Determining The Winner

We've reached the point in our program where we can determine the winner of the game. After the program breaks out of the main game loop, there are only two possibilities: either someone has won, or we have a full board. Assuming we have an implementation for someoneWon at hand, let's handle those possibilities:

- displaying a "Player Won!" or "Computer Won!" message when there's a winner and "It's a tie!" when there is no winner.

The detectWinner function will return the name of the winner in the form of a string, or a value of null if neither player won. Thus, someoneWon can then use the return value of detectWinner.

`!!detectWinner(board);`

This common idiom converts a truthy value like "abc" to true and converts a falsy value like undefined or null to false. The consequence of using !! on the return value of detectWinner is that someoneWon now returns a boolean value.

At last, we're ready to write our detectWinner function. Let's first think about the winning condition. 

The rules of the game say that a player wins when:

All three squares within any row are marked with the player's marker.
All three squares within any column are marked with the player's marker.
All three diagonal squares in either direction are marked with the player's marker.
Rewriting these rules in terms of our implementation, we can say that a player wins when any of the following sequences of squares all contain the player's marker:

1, 2, 3
4, 5, 6
7, 8, 9
1, 4, 7
2, 5, 8
3, 6, 9
1, 5, 9
3, 5, 7
We'll use a nested array to represent these 8 "winning lines." Each winning line is represented by an array that contains the keys of the three squares we'll need to examine. All of those arrays are themselves nested within an array that represents all of the winning lines. This structure lets us iterate over all of the possible winning lines, and, within each iteration, check whether the squares in that line all belong to one player.



