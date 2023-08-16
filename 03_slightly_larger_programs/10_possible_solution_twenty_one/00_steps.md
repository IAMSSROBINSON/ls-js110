# Implementation Steps

The highest-level steps of implementing Twenty-One appear straightforward, but it's a good idea to write down some pseudocode before we begin coding:

1. Initialize deck
  - the deck is the four suits (hearts, diamonds, spades, clubs)
    - each suit has an ace(1, 11), numbers 2 to 10, jack(10), queen(10), king(10) 
    - 13 cards per suit
    - the suit name matters since if a card of a certain suit is dealt it should not be dealt again
    - the suit card name matters for the same reason
    - the suit card name and value matters for the same reason

Questions:
- how to generate the deck?
- what data structure to use to store the deck
- the deck is not shown only the players cards and 1 of the dealers cards are shown
- when the cards are dealt the deck will need to be updated so that the same cards are not dealt again - how will you do this?
- how will the players cards be stored and retrieved?
- how will the dealers cards be stored and retrieved?
- the cards are dealt at random 
  - the player is initially dealt two cards and then 1 card at a time - how will you achieve this?
  - should the deck be shuffled or just get a random card at the point required?
- how will the dealers cards be stored and retrieved?
- the sum of the cards needs to be kept for both the player and dealer individually - how will you do this and retrieve and compare the sum to make decisions?

1. Deal cards to player and dealer
2. Player turn: hit or stay
   - repeat until bust or stay
3. If player bust, dealer wins.
4. Dealer turn: hit or stay
   - repeat until total >= 17
5. If dealer busts, player wins.
6. Compare cards and declare winner.

<br>

## Steps and Code

I started the program my creating a `const` variable `readline` to that later in the program user input can be accepted. I required this module from Node Modules into the program.

```JavaScript
// To install readline-sync: npm i readline-sync :from the command line / terminal
const readline = require('readline-sync');
```

<br>

### Suits
Next I created declared a variable `SUITS` and initialized it to an array of the suits used within this game. The names have been shortened to single initials to ease of game play consumption.

```JavaScript
const SUITS = ['H', 'D', 'S', 'C'];
```

<br>

### Values
A variable to store the potential values of each card is created. I will use the `SUITS` and the `VALUES` to initialize a deck.

```JavaScript
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// The 'A', ACE has a potential value of 1 OR 11, this will need to be handled within a function.
// If an Ace is dealt the sum should increase by 11, if the sum is greater than 21 then the sum should decrease by 10 so that the value of the Ace is only 1 (which is 10 less than the addition of 11).
// If any other card is dealt and the sum goes above 21 and there are Aces in the hand that are worth 11 then they should becomes 1s to keep the sum below or equal to 21.
```

<br>

### Initialize A Deck
The suits and values themselves need to be combined to create a full deck of cards. 4 suits multiplied by 13 values = 52 cards in a deck. 
I will use an array data structure to store each suited card `[H, 7]` and all of the cards will be housed in an outer array.

```JavaScript
// Initialize the deck
function initializeDeck (SUITS, VALUES) {
  let emptyDeck = [];
  for (let index1 = 0; index1 < SUITS.length; index1++) {
    let currentSuit = SUITS[index1];
    for (let index2 = 0; index2 < VALUES.length; index2++) {
      let currentValue = VALUES[index2];
      emptyDeck.push([currentSuit, currentValue]);
    }
  }
  return emptyDeck;
}
/*
[
  [ 'H', '2' ],  [ 'H', '3' ],  [ 'H', '4' ],
  [ 'H', '5' ],  [ 'H', '6' ],  [ 'H', '7' ],
  [ 'H', '8' ],  [ 'H', '9' ],  [ 'H', '10' ],
  [ 'H', 'J' ],  [ 'H', 'Q' ],  [ 'H', 'K' ],
  [ 'H', 'A' ],  [ 'D', '2' ],  [ 'D', '3' ],
  [ 'D', '4' ],  [ 'D', '5' ],  [ 'D', '6' ],
  [ 'D', '7' ],  [ 'D', '8' ],  [ 'D', '9' ],
  [ 'D', '10' ], [ 'D', 'J' ],  [ 'D', 'Q' ],
  [ 'D', 'K' ],  [ 'D', 'A' ],  [ 'S', '2' ],
  [ 'S', '3' ],  [ 'S', '4' ],  [ 'S', '5' ],
  [ 'S', '6' ],  [ 'S', '7' ],  [ 'S', '8' ],
  [ 'S', '9' ],  [ 'S', '10' ], [ 'S', 'J' ],
  [ 'S', 'Q' ],  [ 'S', 'K' ],  [ 'S', 'A' ],
  [ 'C', '2' ],  [ 'C', '3' ],  [ 'C', '4' ],
  [ 'C', '5' ],  [ 'C', '6' ],  [ 'C', '7' ],
  [ 'C', '8' ],  [ 'C', '9' ],  [ 'C', '10' ],
  [ 'C', 'J' ],  [ 'C', 'Q' ],  [ 'C', 'K' ],
  [ 'C', 'A' ]
]
*/
```

<br>

### Shuffle The Deck
The Fisher-Yates technique will be used to shuffle the deck of cards so that we can remove a random card from the top. The Fisher-Yates technique states that the deck should be iterated over and each element(array) should be randomly swapped with an element(array) that comes after it. This technique will be successful if when printing the deck of cards they appear in a randomly generated order but the length of the deck should still be the same and prior to shuffling(52).
```JavaScript
function shuffle (deck) {
  for (let arr = deck.length - 1; arr > 0; arr--) {
    let randomNum = Math.floor(Math.random() * (arr + 1));
    [deck[arr], deck[randomNum]] = [deck[randomNum], deck[arr]];
  }
  return deck;
}
/*
[
  [ 'S', '5' ], [ 'C', '4' ],  [ 'S', '2' ],
  [ 'H', '4' ], [ 'H', '3' ],  [ 'S', 'J' ],
  [ 'S', '9' ], [ 'S', '8' ],  [ 'S', '4' ],
  [ 'D', 'K' ], [ 'H', '2' ],  [ 'H', 'Q' ],
  [ 'S', '6' ], [ 'H', '8' ],  [ 'H', 'J' ],
  [ 'C', 'K' ], [ 'D', '2' ],  [ 'H', 'K' ],
  [ 'C', 'Q' ], [ 'D', '3' ],  [ 'D', 'Q' ],
  [ 'D', '5' ], [ 'C', '6' ],  [ 'C', '8' ],
  [ 'H', 'A' ], [ 'D', '6' ],  [ 'C', '10' ],
  [ 'D', '4' ], [ 'S', '7' ],  [ 'C', 'J' ],
  [ 'D', '7' ], [ 'D', '8' ],  [ 'H', '10' ],
  [ 'H', '9' ], [ 'S', '10' ], [ 'D', 'A' ],
  [ 'H', '6' ], [ 'S', 'A' ],  [ 'C', 'A' ],
  [ 'S', '3' ], [ 'H', '7' ],  [ 'D', '10' ],
  [ 'H', '5' ], [ 'D', '9' ],  [ 'S', 'K' ],
  [ 'D', 'J' ], [ 'C', '7' ],  [ 'C', '5' ],
  [ 'S', 'Q' ], [ 'C', '2' ],  [ 'C', '9' ],
  [ 'C', '3' ]
]

The function receives the current deckArray and defines a for loop that counts backwards from the end of the length of the deck for efficiency of time when reassigning values. A random number is created between 0 and the current arrayIndex which includes all remaining elements in the array. The arrayElement at the current arrayIndex is swapped with the arrayElement at the random ly chosen index (using array destructuring). It ensures each card is randomly shuffled into a new position within the deck and no duplicates occur because when a card is swapped it is taken out of rotation because the current index moves to the next position. 
*/
```

<br>

### Dealing Initial Cards
The player needs to be dealt 2 cards that can be seen.
The dealer needs to be dealt 2 cards, 1 of which can be seen.
The deck should be reflected / updated when the cards are dealt


<br>

### Users Turn
The user has been dealt their initial 2 cards with both on display.
The dealer has been dealt their initial 2 cards with 1 on display.

They are shown the sum total of their current 2 cards.
It is now the Users turn to hit or stick.

- Prompt the user to hit or stick
- declare a variable hitOrStickAnswer and initialize to the users input.
- If the answer is not 'h' for hit, or 's' for stick then inform the user they have made an error and to choose 'h' or 's' values for their answer. 
- Continue to display this error message until one of the correct values are entered.
- When a correct value is entered then it will be assigned to the variable and the program will resume.
  
- The user has chosen 'h' to hit a new card
- their current hand + new card should be shown
- their new sum total should be displayed 
- if the sum total is over 21 then display bust - they lost the game
- if the sum total is equal to 21 then it is automatically the dealers turn 
- if the sum total is less than 21 then ask the user if they want to hit or stick again

<br>

### Dealers Turn
If the user has busted the game is over and the dealer won by default.
If the user has 21 then it is the dealers turn.
If the user chose to stick (and therefore has less than 21 currently) then it is the dealers turn.

loop while the dealer has less than 17 the dealer must hit 
  - the dealer hits and has a new total
    - if the total is less than 17 then hit again
  - if the total is greater than 21 then bust and user wins
  - if the dealer has 21 then break and compare scores
    - if both user and dealer have 21 then it is a tie
  - if the total is greater than 17 and less than 21 then stick and compare score
    - if dealer > user then dealer wins
    - if user > dealer then user wins