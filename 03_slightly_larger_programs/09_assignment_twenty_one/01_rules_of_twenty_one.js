const validSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

function createDeck (validSuits) {
  let deck = {};
  let cardValues = [];
  let ace = [1, 11];
  let jack = 10;
  let queen = 10;
  let king = 10;


  for (let index = 0; index < validSuits.length; index++) {
    deck[validSuits[index]] = cardValues;
  }
  for (let card = 2; card <= 10; card++) {
    cardValues.push(card);
  }
  cardValues.unshift(ace);
  cardValues.push('jack', 'queen', 'king');
  // console.log(cardValues);
       console.log(deck);

  
}
createDeck(validSuits)