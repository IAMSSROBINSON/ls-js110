# User Experience and Gameplay

Consider clearing the screen with console.clear at the start of the program.

Great insight to use setTimeout! In terms of interface though, it might be easier on the user if you create a function that will wait for input from the user before starting the game itself. If they finish reading early and try to interact with the game, it might confuse the user when the program doesn't respond right away. (Extra 'enter' presses during this wait also caused the same number of 'invalid square' reports once the game started.)

Consider the 'play again' check to occur only after a grand winner has been found instead of both then and after each round.

Excellent input validation!

Really great job with your prompts; they're very clear about what the program expects.

I really like how you've laid out the information for the game. It's very easy to read and understand.

<br>

## Source Code

Excellent use of constants!

Try to avoid including an extra newline between the function name and the first line of code within the function. This styling is not idiomatic and will slow down anyone trying to read your code. Try to get used to reading code with this styling instead of changing convention, if it's giving you trouble.

The GRAND_WINNER name might be changed. A name like this implies that it holds information about the actual game's winner instead of the score that's needed to complete a game.

The name getBoard implies that we're retrieving an existing board, rather than creating a new board. This function name should be updated.

Try and stay consistent about how you treat input. If you've invoked trim() on line 77, then it should also be invoked on line 87.

You might be able to simplify isThreat by storing each of the board[nestedArray[idx]] values into their own variables. This might make the logical expression a bit easier to read.

In isWinner, I would suggest storing each of the return values of the invocations of some into variables, and then returning the logical expression made from those variables. It'll make the function more readable.

I'm not entirely certain of the difference in utility between isWinner and getWinner. You might consider renaming these functions to better reflect what they are supposed to return.

In a function like isGrandWinner, it's best to check for greater than or equal to a score like that, rather than strictly equal to, just in case the scores somehow skip values or end up in an invalid state.

Try and make sure all function declarations come before any function invocations. It's close in this program, but the invocation of gameIntro is coming before the declaration of startProgram.

The invocation of startProgram should be separated from the gameIntro function. The name of gameIntro indicates that the game will simply be introduced, not started outright.

You can extract another function out of startProgram that will play a single game. This will help towards the ESLint errors reported for startProgram below. Other than that, outstanding job with dividing your program logic into functions!

startProgram shouldn't return anything (line 372), since the return value won't be used. It might be better to turn lines 367 to 376 into another function that will return whether the game should end.

Excellent job with avoiding global state!

<br>

## ESLint
Our linter systems may be different. I'm getting the following errors from ESLint:

Copy Code
   41:1  error  Function 'displayBoard' has too many statements (16). Maximum allowed is 15  max-statements
   67:1  error  Function 'getUserMove' has too many lines (21). Maximum allowed is 20        max-lines-per-function
  268:8  error  Trailing spaces not allowed                                                  no-trailing-spaces
  276:1  error  Expected indentation of 2 spaces but found 4                                 indent
  277:1  error  Expected indentation of 2 spaces but found 4                                 indent
  333:1  error  Function 'startProgram' has too many lines (39). Maximum allowed is 20       max-lines-per-function
  333:1  error  Function 'startProgram' has too many statements (22). Maximum allowed is 15  max-statements
  334:1  error  Trailing spaces not allowed                                                  no-trailing-spaces

✖ 8 problems (8 errors, 0 warnings)
  4 errors and 0 warnings potentially fixable with the `--fix` option.
The one that you mentioned is an error that shows up if you try to use a keyword or a reserved word as an identifier name. I'm not sure why it would be showing up for your program. Try to make sure that the provided .eslintrc.yml file that's provided is in the same directory as the file you're trying to lint.

The 'too many statements' and 'too many lines' errors for each of the listed functions generally indicate that a function is doing too much.

displayBoard is right at the edge of what's acceptable. If you're fine with the screen being cleared every time you want to display the board, I think it's fine to ignore the error in this case.

getUserMove has too many lines. In this case, I think we can also ignore the error, since the only reason it has more lines is because you're breaking out the function arguments into their own lines.

Suggestions for how to divide startProgram into a couple more functions were covered above.

<br>

## Summary
You've showed excellent improvement with this program! I can tell you've put a ton of thought into how to organize things into functions. And I'm really happy that you went through the exercise of coding out your own solution for each stage before diving into the text, that can be very difficult. Great job! I'm available below if you have any comments or questions.