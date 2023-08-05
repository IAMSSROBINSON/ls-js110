# Improve Play Again Handling

You may have noticed that the Play again? handling starts a new game when the user enters a response that begins with y or Y, but ends the program if the user enters anything else. Even just pressing the {Enter} key is enough to end the program. Modify the program so that it only accepts y, Y, n, or N as valid inputs, and issues an error message for anything else.

Consider what happens when the user enters something that begins with n or y but isn't unambiguously a yes/no response. For instance, yellow or narwhale. What should the program do in those cases?

<br>
Clarification:
Improve the play another game prompt to accepts y, Y, n or N.
Since a user might enter the word yellow, how do we cater to handling that since it is not clear that they meant to type 'y' for 'yes'.

- since we will use an array to store the potential acceptable inputs we may as well include the strings no, NO, No, yes, YES, Yes and any other variations of the input, in fact we only need include one version of each since we can convert the user input to lowercase and compare against that
- instead of taking the first character of the user input we will instead only allow entry of valid words: y, n, no or yes since there is no need to validate any other entries.

- we can use a switch case for y and yes
- we can use a switch case for n and no
- otherwise an error message will be shown it the user deviates from these entries and the user will be prompted for a valid entry
<br>

A: Algorithm
create a const VALID_PLAY_AGAIN_INPUTS = ['y', 'n', 'yes', 'no];
prompt the user if they would like to play again?
while (true) {
  let playAgainInput = READLINE.question();
  if (VALID_PLAY_AGAIN_INPUTS.includes(playAgainInput.toLowerCase())) break;

  prompt(`Please enter a valid input: no, n, yes, y`);
  - could use the joinOr function on this?
}



<br>