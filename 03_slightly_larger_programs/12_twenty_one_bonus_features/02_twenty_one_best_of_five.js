/*

Best of Five
Keep track of who won each round, and
declare the player who reaches three points first as the match winner.

How to implement keeping track of scores?
- if a user wins a game increase their score by +1
  - create a playerScoreManager function and use closure and encapsulation
  - use to handle scoring

```JavaScript
function playerScoreManager () {
  let score = 0;

  function getScore () {
    return score;
  }

  function increaseScore () {
    score += 1;
  }

  function resetScore () {
    score = 0;
  }
  return {getScore, increaseScore, resetScore}
}

let userScoreManager = playerScoreManager();
let dealerScoreManager = playerScoreManager();
```

- Find the code instances where a player wins and increase there score
  - invoke the increaseScore for the player that wins

- set a global constant of bestOfGames = 3;
- set a function isGrandWinner
  - if userScore === bestOfGames => user is the grandWinner
  - if dealerScore === bestOfGames => dealer is the grandWinner
    - reset both scores to 0
    - EOG
      - game should only prompt to play again at the end of a grand cycle
      - the games should repeat playback until a player has scored 3
- isGrandWinner needs to be checked at the end of each game cycle
  - if there is no grandWinner then the cycle can auto playback
  - define new while (true) loop inside current while (true) loop
    - this will be the grandWinner loop cycle to check for

*/