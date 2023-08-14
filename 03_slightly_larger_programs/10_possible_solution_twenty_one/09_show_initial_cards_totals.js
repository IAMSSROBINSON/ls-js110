// Show Initial Cards Total
// Set a function getSumOfCards(playerCardManager)
// Return the sum of the cards in the players hand
// Account for the FACE_CARDS, A[1, 11] and VALUES
// Increase the sum by 11 if an 'A' is found
// For each 'A' found if the sum is > 21 then reduce the sum by -10('A' worth 1)

const SUITS = ["H", "D", "S", "C"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ["J", "Q", "K", "A"];
const USER_NAME = "User";
const DEALER_NAME = "Dealer";
const INITIAL_CARD_COUNT = 2;

function initializeDeck() {
  let deck = [];

  SUITS.forEach((suit) => {
    VALUES.concat(FACE_CARDS).forEach((value) => {
      deck.push([suit, value]);
    });
  });
  return deck;
}

function shuffleDeck(mainDeck) {
  for (let index = mainDeck.length - 1; index >= 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));

    let temp = mainDeck[index];
    mainDeck[index] = mainDeck[randomIndex];
    mainDeck[randomIndex] = temp;
  }
  return mainDeck;
}

function cardsManager(mainDeck) {
  let cards = [];

  function getCards() {
    return cards;
  }

  function initialCards() {
    for (let idx = 0; idx < INITIAL_CARD_COUNT; idx++) {
      let card = mainDeck.pop();
      cards.push(card);
    }
  }

  return { getCards, initialCards };
}

function showInitialCards(playerName, playerManager) {
  if (playerName === 'Dealer') {
    console.log(
      `${playerName}:`,
      playerManager.getCards()[0]
    );
  } else {
    console.log(
      `${playerName}:`,
      playerManager.getCards()
    );
  }
}

function getSumOfCards (playerCardManager) {
  let sum = 0;

  playerCardManager.getCards().forEach((card) => {
    if (card[1] === "A") {
      sum += 11;
    } else if (FACE_CARDS.includes(card[1])) {
      sum += 10;
    } else {
      sum += Number(card[1]);
    }
  });

  playerCardManager.getCards().filter((card) => {
    return card[1] === "A";
  }).forEach((_) => {
    if (sum > 21) {
      sum -= 10;
    }
  });
  return sum;
}

let mainDeck = initializeDeck();
shuffleDeck(mainDeck);

// console.log(mainDeck);

let userCardsManager = cardsManager(mainDeck);
userCardsManager.initialCards();

let dealerCardsManager = cardsManager(mainDeck);
dealerCardsManager.initialCards();

showInitialCards('User', userCardsManager);
showInitialCards('Dealer', dealerCardsManager);

// console.log(mainDeck);
// console.log(mainDeck.length);

console.log(getSumOfCards(userCardsManager));
// console.log(getSumOfCards(dealerCardsManager));
