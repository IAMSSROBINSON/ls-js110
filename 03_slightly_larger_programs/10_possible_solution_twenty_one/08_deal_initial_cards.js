// Deal Initial Cards
// Deal the User and the Dealer two cards each
  // => use encapsulation and closures for User and Dealer
  // => variable playerCards array, initialCards(),
  // => set function getCards()
// Show both of the Users cards
  // set function displayCards(playerName, playerCardsManagerFunction)
// Show 1 of the Dealers cards
  // invoke displayCards(playerName, cardsArray)


const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ['J', 'Q', 'K', 'A'];
const PLAYER_NAMES = ['User', 'Dealer'];
const INITIAL_CARD_COUNT = 2;

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

function cardsManager (mainDeck) {
  let cards = [];

  function getCards () {
    return cards;
  }

  function initialCards () {
    for (let idx = 0; idx < INITIAL_CARD_COUNT; idx++) {
      let card = mainDeck.pop();
      cards.push(card);
    }
  }

  return {getCards, initialCards};
}

function showInitialCards (playerConstIdxNumber, playerManager) {
  if (playerConstIdxNumber === 1) {
    console.log(`${PLAYER_NAMES[playerConstIdxNumber]}:`, playerManager.getCards()[0]);
  } else {
    console.log(`${PLAYER_NAMES[playerConstIdxNumber]}:`, playerManager.getCards());
  }
}

let mainDeck = initializeDeck();
shuffleDeck(mainDeck);

console.log(mainDeck);

let userCardsManager = cardsManager(mainDeck);
userCardsManager.initialCards();

let dealerCardsManager = cardsManager(mainDeck);
dealerCardsManager.initialCards();

showInitialCards(0, userCardsManager);
showInitialCards(1, dealerCardsManager);

console.log(mainDeck);
console.log(mainDeck.length);


