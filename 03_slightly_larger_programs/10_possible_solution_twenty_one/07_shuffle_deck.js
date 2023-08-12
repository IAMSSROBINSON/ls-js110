// Shuffle deck
// The order of the presentation of the cards needs to be randomized
// When a deck is shuffled there should be no way to guess any particular card
// The currentCard should be swapped with a randomCard
// and the randomCard should be swapped with the currentCard
// so that the positions of the cards are swapped and no duplicates are created
// The deck should be supplied as an argument since we are mutating the deck

// Initialize deck
const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ['J', 'Q', 'K', 'A'];

function initializeDeck () {
  let deck = [];

  SUITS.forEach((suit) => {
    VALUES.concat(FACE_CARDS).forEach((value) => {
      deck.push([suit, value]);
    });
  });
  return deck;
}


function shuffleDeck (mainDeck) {
  for (let index = mainDeck.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));

    let temp = mainDeck[index];
    mainDeck[index] = mainDeck[randomIndex];
    mainDeck[randomIndex] = temp;
  }
  return mainDeck;
}

let mainDeck = initializeDeck();
shuffleDeck(mainDeck);
console.log(mainDeck);
