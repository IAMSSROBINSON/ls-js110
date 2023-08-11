const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const NUMBER_OF_INITIAL_CARDS = 2;
const USER_NAME = "USER";
const DEALER_NAME = "DEALER";
const VALID_HIT_OR_STICK_RESULTS = ["h", "s"];
const MAGIC_TOTAL_21 = 21;

// Initialize the deck
function initializeDeck(SUITS, VALUES) {
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

function shuffle(deck) {
  for (let arr = deck.length - 1; arr > 0; arr--) {
    let randomNum = Math.floor(Math.random() * (arr + 1));
    [deck[arr], deck[randomNum]] = [deck[randomNum], deck[arr]];
  }
  return deck;
}

function getInitialCards(deck) {
  let initialCards = [];

  for (let cardArr = 0; cardArr < NUMBER_OF_INITIAL_CARDS; cardArr++) {
    let currentCard = deck.pop();
    initialCards.push(currentCard);
  }
  return initialCards;
}

function cardsManager(deck) {
  let cards = [];

  function dealInitialCards(playerInitialCards) {
    return playerInitialCards.forEach((cardArray) => cards.push(cardArray));
  }

  function getHand() {
    return cards;
  }

  function hitCard() {
    let newCard = deck.pop();
    cards.push(newCard);
  }

  function resetHand() {
    cards = [];
  }

  return { getHand, hitCard, resetHand, dealInitialCards };
}

function getTotal(playerCards) {
  let total = 0;

  playerCards.forEach((cardArray) => {
    if (["J", "Q", "K"].includes(cardArray[1])) {
      total += 10;
    } else if (cardArray[1] === "A") {
      total += 11;
    } else {
      total += Number(cardArray[1]);
    }
  });

  for (let cardArr = 0; cardArr < playerCards.length; cardArr++) {
    if (playerCards[cardArr][1] === "A" && total > MAGIC_TOTAL_21) {
      total -= 10;
    } else if (total === MAGIC_TOTAL_21) {
      total = MAGIC_TOTAL_21;
    }
  }

  return total;
}

function displayCards(name, player) {
  if (name === DEALER_NAME) {
    console.log(name, player.getHand()[0]);
  } else {
    console.log(name, player.getHand());
  }
}

function isBust(playerManager) {
  return getTotal(playerManager.getHand()) > MAGIC_TOTAL_21;
}

function implementHitStick(playerManager, hitOrStickResult) {
  let currentTotal;

  switch (hitOrStickResult) {
    case "h":
      console.log("hit");
      console.log("\nNew Card Dealt:");
      playerManager.hitCard();
      displayCards(USER_NAME, playerManager);
      console.log(
        `\nYour current total is: ${getTotal(playerManager.getHand())}`
      );
      currentTotal = getTotal(playerManager.getHand());
      break;
  }
  return currentTotal;
}

// MAIN PROGRAM
// while (true) {
let deck = initializeDeck(SUITS, VALUES);
shuffle(deck);

let userInitialCards = getInitialCards(deck);
let dealerInitialCards = getInitialCards(deck);

let userCardsManager = cardsManager(deck);
let dealerCardsManager = cardsManager(deck);

userCardsManager.dealInitialCards(userInitialCards);
dealerCardsManager.dealInitialCards(dealerInitialCards);

// Display initial cards
console.log(`\nInitial cards being dealt:\n`);
displayCards(USER_NAME, userCardsManager);
displayCards(DEALER_NAME, dealerCardsManager);

// USERS TURN: show the user their current sum
// and ask if they want to hit(h) or stick(s)

while (true) {
  console.log(
    `\nYour current total is: ${getTotal(userCardsManager.getHand())}`
  );
  console.log(`Would you like to Hit('h') or Stick('s')`);
  let hitOrStickResult;

  while (true) {
    hitOrStickResult = readline.question().toLowerCase();
    if (VALID_HIT_OR_STICK_RESULTS.includes(hitOrStickResult)) break;

    console.log(
      `Invalid Entry! Please return 'h' to hit a new card or 's' to stick with your current hand`
    );
  }

  if (implementHitStick(userCardsManager, hitOrStickResult)) {
    if (isBust(userCardsManager)) {
      console.log(
        `YOU BUST!\nTotal: ${getTotal(
          userCardsManager.getHand()
        )}\nYour total is greater than ${MAGIC_TOTAL_21}`
      );
      return false;
    }
    console.log('not bust, under 21');
  } else if (getTotal(userCardsManager.getHand() === MAGIC_TOTAL_21)) {
    break;
  } else return false;

  // user either has 21 or they chose to stick
  // at this point its the dealers turn
}
