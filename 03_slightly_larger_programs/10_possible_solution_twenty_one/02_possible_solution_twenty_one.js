const readline = require('readline-sync');

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const NUMBER_OF_INITIAL_CARDS = 2;
const USER_NAME = 'USER';
const DEALER_NAME = 'DEALER';

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


function shuffle (deck) {
  for (let arr = deck.length - 1; arr > 0; arr--) {
    let randomNum = Math.floor(Math.random() * (arr + 1));
    [deck[arr], deck[randomNum]] = [deck[randomNum], deck[arr]];
  }
  return deck;
}

function getInitialCards (deck) {
  let initialCards = [];

  for (let cardArr = 0; cardArr < NUMBER_OF_INITIAL_CARDS; cardArr++) {
    let currentCard = deck.pop();
    initialCards.push(currentCard);
  }
  return initialCards;
}

function cardsManager (deck, playerInitialCards = []) {
  let cards = [];

  function dealInitialCards (playerInitialCards) {
    return playerInitialCards.forEach((cardArray) => cards.push(cardArray));
  }

  function showHand () {
    return cards;
  }

  function hitCard () {
    cards.push(deck.pop());
  }

  function resetHand () {
    cards = [];
  }

  return {showHand, hitCard, resetHand, dealInitialCards};
}

function displayCards (name, player) {
  if (name === DEALER_NAME) {
    console.log(name, player.showHand()[0]);
  } else {
    console.log(name, player.showHand());
  }
}

// MAIN PROGRAM
let deck = initializeDeck(SUITS, VALUES);
shuffle(deck);

let userInitialCards = getInitialCards(deck);
let dealerInitialCards = getInitialCards(deck);

let userCardsManager = cardsManager(deck);
let dealerCardsManager = cardsManager(deck);

userCardsManager.dealInitialCards(userInitialCards);
dealerCardsManager.dealInitialCards(dealerInitialCards);

displayCards(USER_NAME, userCardsManager);
displayCards(DEALER_NAME, dealerCardsManager);

