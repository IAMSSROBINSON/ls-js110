// Initialize deck
// deck is composed of 4 suits with 13 cards per suit
// suits: hearts, diamonds, spades, clubs
// => these are constants in the game
const SUITS = ['H', 'D', 'S', 'C'];
// cards: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ['J', 'Q', 'K', 'A'];
// => these values are constants in the game
// Jack, Queen, King are each worth 10
// Ace can be worth 1 or 11 depending on whether the total is greater than 21
// The deck will be composed of 52 cards, one value for each suit
// The cards will be represented by an array of the suit and value as elements:
// => ['H', '2']
// The deck of cards will be an array that houses the cards:
// => [[], [], []...]

// Write a function that takes no arguments
// The function should create and store 52 cards and return a deck array

// This function take no arguments. 
// The function declares a deck variable and initializes it to an empty array.
// The function iterates over the SUITS elements and for every suit and value combination a card array element is pushed to the deck array.
// Once all suits and all cards have been generated the deck array is returned to the caller.
function initializeDeck () {
  let deck = [];

  SUITS.forEach((suit)=>{
    VALUES.concat(FACE_CARDS).forEach((value)=>{
      deck.push([suit, value]);
    });
  });
  return deck;
};

let mainDeck = initializeDeck();
console.log(mainDeck);
console.log(mainDeck.length);