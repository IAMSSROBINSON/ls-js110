// Users Turn
// If the User total is 21 automatically go to the dealer turn
// If the User total is < 21
// then ask the user if they would like to Hit or Stick
// Validate the entry for "h" or "s" values only with a function
// If it's a hit then deal the User another card
// Display the new User total
// If the total is 21 then go to the dealers turn automatically
// If the total is > 21 then the User busts and the Dealer wins
// Display Bust message
// Else ask the user if they want to Hit or Stick and repeat this loop
// If it's a stick then it is the dealers turn

const SUITS = ["H", "D", "S", "C"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ["J", "Q", "K", "A"];
const USER_NAME = "User";
const DEALER_NAME = "Dealer";
const INITIAL_CARD_COUNT = 2;
const MAGIC_21 = 21;
const readline = require('readline-sync');
const validHitStickInputs = ['h', 's'];

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

  function hitCard () {
    let card = mainDeck.pop();
    cards.push(card);
  }

  return { getCards, initialCards, hitCard };
}

function showInitialCards(playerName, playerManager) {
  if (playerName === DEALER_NAME) {
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
  let cardsArr = playerCardManager.getCards();
  cardsArr.forEach((card) => {
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
      sum -= 10;}
  });
  return sum;
}

function printSums (playerName, playerManager) {
  console.log(`\n${playerName}: Sum of the cards:`, getSumOfCards(playerManager));
}

function validateHitStick () {
  let hitStick;

  console.log(`Would you like to Hit('h') or Stick('s') ?`);
  while (true) {
    hitStick = readline.question().toLowerCase();

    if (validHitStickInputs.includes(hitStick)) break;

    console.log(`Invalid Input!\nPlease return 'h' to Hit or 's' to Stick:`);
  }
  return hitStick;
}

function dealersTurn (playerName, playerCardManager) {
  console.log(`\n${playerName}'s Turn:`);
  console.log(`${playerName}s cards are:, `, playerCardManager.getCards());
  console.log(getSumOfCards(playerCardManager));
  return true;
}

function isTwentyOne (playerCardManager) {
  return getSumOfCards(playerCardManager) === MAGIC_21;
}

function isBust (playerCardManger) {
  return playerCardManger.getCards() > MAGIC_21;
}


console.log(`\nThe Game Of 21 Has Officially Started!`);
console.log(`\nThe Initial Cards are being dealt:\n`);
let mainDeck = initializeDeck();
shuffleDeck(mainDeck);

// console.log(mainDeck);

let userCardsManager = cardsManager(mainDeck);
userCardsManager.initialCards();

let dealerCardsManager = cardsManager(mainDeck);
dealerCardsManager.initialCards();

showInitialCards(USER_NAME, userCardsManager);
showInitialCards(DEALER_NAME, dealerCardsManager);

// console.log(mainDeck);
// console.log(mainDeck.length);

printSums(USER_NAME, userCardsManager);
// printSums(DEALER_NAME, dealerCardsManager);
// console.log(getSumOfCards(dealerCardsManager));

let hitStickAnswer;
if (isTwentyOne(userCardsManager)) {
  console.log(`${USER_NAME}: has ${MAGIC_21}.`);
  dealersTurn(DEALER_NAME, dealerCardsManager);
} else {
  hitStickAnswer = validateHitStick ();
  console.log('You chose: ', hitStickAnswer);
}

switch (hitStickAnswer) {
  case 'h':
    userCardsManager.hitCard();
    console.log(`Your cards are:`, userCardsManager.getCards());
    printSums(USER_NAME, userCardsManager);
    break;
  case 's':
    break;
}

