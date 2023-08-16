const SUITS = ["H", "D", "S", "C"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const FACE_CARDS = ["J", "Q", "K", "A"];
const USER_NAME = "User";
const DEALER_NAME = "Dealer";
const INITIAL_CARD_COUNT = 2;
const MAGIC_21 = 21;
const READLINE = require("readline-sync");
const VALID_HIT_STICK_INPUTS = ["h", "s"];
const DEALER_AUTO_STICK = 17;
const VALID_YES_OR_NO = ["y", "n", "yes", "no"];

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

  function hitCard() {
    let card = mainDeck.pop();
    cards.push(card);
  }

  return { getCards, initialCards, hitCard };
}

function dealInitialCards (userCardsManager, dealerCardManager) {
  userCardsManager.initialCards();
  dealerCardManager.initialCards();
}

function showInitialCards(userCardsManager, dealerCardsManager) {
  console.log(DEALER_NAME, dealerCardsManager.getCards()[0]);
  console.log(USER_NAME, userCardsManager.getCards());
}

function getSumOfCards(playerCardManager) {
  let sum = 0;
  let cardsArr = playerCardManager.getCards();
  cardsArr.forEach((card) => {
    if (card[1] === "A") {
      sum += 11;
    } else if (FACE_CARDS.includes(card[1])) {
      sum += 10;
    } else sum += Number(card[1]);
  });
  playerCardManager
    .getCards()
    .filter((card) => {
      return card[1] === "A";
    })
    .forEach((_) => {
      if (sum > MAGIC_21) sum -= 10;
    });
  return sum;
}

function validateHitStick() {
  let hitStick;

  console.log(`\nWould you like to Hit('h') or Stick('s') ?`);
  while (true) {
    hitStick = READLINE.question().toLowerCase();
    if (VALID_HIT_STICK_INPUTS.includes(hitStick)) break;

    console.log(`Invalid Input!\nPlease return 'h' to Hit or 's' to Stick:`);
  }
  return hitStick;
}

function dealersTurn(dealerCardsManager, userCardsManager) {
  console.log(`\n${DEALER_NAME}'s Turn:`);
  displayCardsAndTotal(DEALER_NAME, dealerCardsManager);

  while (getSumOfCards(dealerCardsManager) < DEALER_AUTO_STICK
  && getSumOfCards(userCardsManager) <= MAGIC_21) {
    console.log(`\n${DEALER_NAME} hits:`);
    dealerCardsManager.hitCard();
    displayCardsAndTotal(DEALER_NAME, dealerCardsManager);

    if (isBust(dealerCardsManager)) {
      console.log(`Dealer Bust! with score ${getSumOfCards(dealerCardsManager)}. Total went over ${MAGIC_21}!`);
      return !isBust(dealerCardsManager);
    }
    if (getSumOfCards(dealerCardsManager) === MAGIC_21) {
      return getSumOfCards(dealerCardsManager);
    }
  }
  console.log(`\nDealer Sticks.`);
  return null;
}

function usersTurn(userCardsManager, dealerCardsManager) {
  userCardsManager.hitCard();
  console.log(`Your cards are:`, getCards(userCardsManager));
  printPlayerTotal(USER_NAME, userCardsManager);
  console.log("");
  showInitialCards(DEALER_NAME, dealerCardsManager);
}

function isTwentyOne(playerCardManager) {
  return getSumOfCards(playerCardManager) === MAGIC_21;
}

function isBust(playerCardManger) {
  return getSumOfCards(playerCardManger) > MAGIC_21;
}

function getWinner(userCardsManager, dealerCardsManager) {
  let userTotal = getSumOfCards(userCardsManager);
  let dealerTotal = getSumOfCards(dealerCardsManager);

  if (userTotal > MAGIC_21) {
    return DEALER_NAME;
  } else if (dealerTotal > MAGIC_21) {
    return USER_NAME;
  } else if (userTotal > dealerTotal) {
    return USER_NAME;
  } else return DEALER_NAME;
}

function isTied(userCardsManager, dealerCardsManager) {
  return getSumOfCards(userCardsManager) === getSumOfCards(dealerCardsManager);
}

function displayWinner(winner, userCardsManager, dealerCardsManager) {
  console.log(`\nThe Winner is: ${winner}!\n`);
  displayFinalHandsAndTotals(userCardsManager, dealerCardsManager);
}

function displayFinalHandsAndTotals(userCardsManager, dealerCardsManager) {
  console.log(`FINAL HANDS & TOTALS:`);
  displayCardsAndTotal(USER_NAME, userCardsManager);
  displayCardsAndTotal(DEALER_NAME, dealerCardsManager);
}

function displayCardsAndTotal(playerName, playerCardManager) {
  console.log(`\n${playerName}'s Cards:`, getCards(playerCardManager));
  printPlayerTotal(playerName, playerCardManager);
}

function getCards(playerManager) {
  return playerManager.getCards();
}

function printPlayerTotal(playerName, playerCardsManager) {
  console.log(
    `${playerName}'s Total:`,
    getSumOfCards(playerCardsManager, `\n`)
  );
}

function tiedGame(userCardsManager, dealerCardsManager) {
  console.log(`\nThe Game is Tied!\n`);
  displayFinalHandsAndTotals(userCardsManager, dealerCardsManager);
}

function userInPlay(userCardsManager, dealerCardsManager) {
  while (true) {
    let hitOrStick = validateHitStick();
    console.clear();

    if (hitOrStick === "h") {
      console.log(`\nYou chose to Hit:`);
      usersTurn(userCardsManager, dealerCardsManager);
      if (isBust(userCardsManager) || isTwentyOne(userCardsManager)) {
        if (isBust(userCardsManager)) {
          console.log(`You Bust! with score ${getSumOfCards(userCardsManager)}. You went over 21!`);
        }
        break;
      }
    } else {
      console.log(`\nYou chose to Stick.`);
      dealersTurn(dealerCardsManager, userCardsManager);
      break;
    }
  }
}

function playAgain() {
  console.log(`\nWould you like to play again? Yes('y') or No('n') :`);

  let answer;
  while (true) {
    answer = READLINE.question().toLowerCase();
    if (VALID_YES_OR_NO.includes(answer)) break;

    console.log(`\nInvalid Input!\nPlease return 'y' for Yes or 'n' for No :`);
  }
  return answer;
}

while (true) {
  console.clear();
  console.log(`\nThe Game Of 21 Has Officially Started!`);
  console.log(`\nThe Initial Cards are being dealt:\n`);
  let mainDeck = initializeDeck();
  shuffleDeck(mainDeck);

  let userCardsManager = cardsManager(mainDeck);
  let dealerCardsManager = cardsManager(mainDeck);
  dealInitialCards(userCardsManager, dealerCardsManager);

  showInitialCards(userCardsManager, dealerCardsManager);

  console.log("");
  printPlayerTotal(USER_NAME, userCardsManager);

  if (isTwentyOne(userCardsManager)) {
    dealersTurn(dealerCardsManager);
  } else {
    userInPlay(userCardsManager, dealerCardsManager);
  }

  if (isTied(userCardsManager, dealerCardsManager)) {
    tiedGame(userCardsManager, dealerCardsManager);
  } else {
    let winner = getWinner(userCardsManager, dealerCardsManager);
    displayWinner(winner, userCardsManager, dealerCardsManager);
  }

  let answer = playAgain();
  if (answer === "n") break;
}
