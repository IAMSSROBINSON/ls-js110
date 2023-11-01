## Data Structure

What data structure should you use to contain the deck, the player's cards, and the dealer's cards? An object, perhaps? An array? A nested array? Your decision will have consequences throughout your code but don't be afraid of choosing the wrong one. Play around with an idea, and see how far you can push it. If it doesn't work, back out and take another approach.

- The deck needs to be shared since the player and the dealer will draw from the same set of cards and any card dealt to either player will no longer be available to draw from the deck again
  
- The deck contains multiple labels and multiple values, this makes it a prime candidate for using a object data structure since both the label/suite and the values will be of importance

- The suits (Hearts, Diamonds, Spades, Clubs) should be the key/property names within an object and the value pairs can also be an object containing the English spelling for for number value representation:

```JavaScript
let deck = {
  Hearts : {
    'ace' : [1, 11],
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6, 
    'seven' : 7, 
    'eight' : 8, 
    'nine' : 9, 
    'ten' : 10,
    'jack' : 10,
    'queen' : 10,
    'king' : 10
    },
  Diamonds : {
    'ace' : [1, 11],
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6, 
    'seven' : 7, 
    'eight' : 8, 
    'nine' : 9, 
    'ten' : 10,
    'jack' : 10,
    'queen' : 10,
    'king' : 10
    },
  Spades : {
    'ace' : [1, 11],
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6, 
    'seven' : 7, 
    'eight' : 8, 
    'nine' : 9, 
    'ten' : 10,
    'jack' : 10,
    'queen' : 10,
    'king' : 10
    },
  Clubs : {
    'ace' : [1, 11],
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6, 
    'seven' : 7, 
    'eight' : 8, 
    'nine' : 9, 
    'ten' : 10,
    'jack' : 10,
    'queen' : 10,
    'king' : 10
    }
}
```

This structure however is hard to generate without predetermining the struct so I may explore the potential for using nested arrays with more than 1 element to help identify a card, its suit and value.

<br>

## The Deck

## The Players Cards
Nested Array:
```JavaScript
// Nested Array
// Each array has two elements, the suit and the card value
[
  ['H', '2'], // Hearts, 2(2)
  ['S', 'J'] // Spade, Jack(10)
  ['D', 'A'] // Diamond, Ace(1, 11)
];
// All values are strings(instead of mixed) for ease of conversion to a common value later
```

<br>

## Calculating Aces
- Aces can be worth 1 or 11 depending on the circumstances. 
- The program should be able to work out and determine which is required 1 or 11 instead of asking the user.

```JavaScript
function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

/*

Function total receives a nested array argument and it is assigned to local parameter variable `cards`.

Since the value of `cards` is an array the argument was passed by reference and any changes to the elements in  place will affect the original array values.

A variable `values` is declared and initialized to the return value of invoking the .map() method on the `cards` array.
For each `card` / element(nested array) within the `cards` array the value at index position[1] should ne returned by the callback function and added to a new array as an element to be returned by the method.

A `sum` variable is declared and initialized to the primitive number value `0`.

The `forEach()` method is invoked on the `values` array (forEach has a return value of `undefined` for the method and the callback function iterations)

The method iterates over each `value`(string) within the calling array and within the block an `if` statement is defined.

The `if` clause evaluates the expression of the currentValue for strict equality(`===`) to the string `A`, this must evaluate to true for the clause to be entered upon which time the value of the variable `sum` will be reassigned to increase by its current value +11 since the additional assignment operator is used(+=).

The next conditional evaluated if the first clause evaluates to `false` is an `else if` statement which checks for the inclusion of the currentValue within a pre-defined array of string elements. If the value of the currentValue local variable is included within the pre-defined array then the `else if` clause is executed and the additional assignment operator(+=) is used to reassign the value of `sum` by its current value `+10`.

If none of these conditionals evaluate to `true` then the `else` clause is invoked and uses the additional assignment operator(+=) to reassign the value of `sum` to the return value of invoking the `Number` function on the value of the string `value` thereby coercing what should be a numerical string into an integer so that the value of `sum` will be increased by this value amount.

This function covers the bases of the alphabetical string values and the alphanumeric string values by converting them to number values that can be used with arithmetic operators for summing the value of a hand of cards.

Later a `.filter()` method is invoked on the `values` array to return an array with the values(elements) that have strict equality to the string 'A'. For each element that does an `if` statement is defined that evaluates whether the `sum` is greater than `21` and if it is the decrement assignment operator(-=) is used to reassign the value of `sum` to `-10` its currentValue.

Then the function returns the value of the variable `sum` to the caller.

*/
```

<br>

## The Players Turn
When thinking about how to code the player's turn, think about a loop that keeps asking the player to either hit or stay. Now, think about the breaking condition for that loop. When do we stop asking that question of the user? Some pseudocode may help.

- Ask player to hit or stay.
- If stay, stop asking.
- Otherwise, go to #1.

- prompt the player if they want to to 'hit or stay'
  - 1) hit
  - 2) stay
- while (true) {
- store to hitOrStayVariable 
- if ['1', '2'].includes(hitOrStayVariable) break;

  - displayErrorMessage loop and ask again
  - }
- then once broken define a switch statement(hitOrStayVariable){
- with the code for '1' and '2' cases}

```JavaScript
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay') break;
}
```

Notice that we want to ask the user the question at least once, so the break occurs at the bottom of the loop. If the user chooses anything other than "stay", then the loop continues.

Can you think of another condition that can cause the loop to break? Suppose the user keeps hitting, and eventually busts? That sounds like something we should check for:

```JavaScript
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}
// Thus, the user can only exit the loop when one of those two things occur: either the player stays, or the player busts.
```

Once the loop ends, we can recheck the conditions to see why the loop ended, and handle things differently if needed.

```JavaScript
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === 'stay' || busted()) break;
}

if (busted()) {
  // probably end the game? or ask the user to play again?
} else {
  console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
}
```

<br>

## Shuffle Cards
You'll need to shuffle the deck of cards to make sure that they're in a random order before you start dealing cards. Unfortunately, JavaScript arrays don't have a method for shuffling elements. You'll need to implement your own shuffling function. One good algorithm for shuffling an array is the Fisher–Yates shuffle, which looks like the following in JavaScript:

```JavaScript
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}
```

<br>

## The Dealers Cards
Dealer turn. The dealer turn follows a pattern that is very similar to the player's turn. However, the dealer's break condition occurs at the top of the "hit or stay" loop. See if you can determine why that is.

<br>

## Displaying the Result
When you display the result, you also need to perform the calculation of who won. Having one function that both performs the calculation and displays the result is hard to reason about. The trick is to create a function that only returns the result of the game, and another that only handles displaying the result. You want to write functions that only do one thing.


