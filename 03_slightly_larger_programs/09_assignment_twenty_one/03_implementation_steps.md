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