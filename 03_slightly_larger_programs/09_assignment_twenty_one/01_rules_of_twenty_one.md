# Assignment: Twenty-One

In this assignment, we'll build a game called Twenty-One. 

<br>

## Rules of Twenty-One

### Deck
Start with a standard 52-card deck consisting of the 4 suits (Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

<br>

### Goal
The goal of Twenty-One is to try to get as close to 21 as possible without going over. If you go over 21, it's a bust, and you lose.

<br>

### Setup
The game consists of a dealer and a player. Both participants are initially dealt a hand of two cards. The player can see their 2 cards, but can only see one of the dealer's cards.

<br>

### Card values
All of the card values are pretty straightforward, except for the Ace. 

- The cards with numbers 2 through 10 are worth their face value. 
- The Jack, Queen, and King are each worth 10. 
- The Ace can be worth 1 or 11 depending on circumstances. 
  - Its value is determined each time a new card is drawn from the deck. For example, if the hand contains a 2, an Ace, and a 5, then the total value of the hand is 18. In this case, the Ace is worth 11 because the sum of the hand (2 + 11 + 5) doesn't exceed 21. Now, say another card is drawn, and it happens to be an Ace. Your program must determine the value of both Aces. If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be worth 1, resulting in the hand's total value being 19. What happens if another card is drawn and it also happens to be an Ace? It can get tricky if there are multiple Aces in a hand, so your program must account for that.


|Card               |Value        |
|:-----------------:|:-----------:|
|2 - 10             |face value   |
|Jack, Queen, King  |10           |
|Ace                |1 or 11      |

<br>

### Player turn
The player always goes first, and can decide to either hit or stay. A hit means the player wants to be dealt another card. Remember, if his total exceeds 21, he will bust and lose the game. The decision to hit or stay depends on the player's cards and what the player thinks the dealer has. For example, if the dealer is showing a "10" (the other card is hidden), and the player has a "2" and a "4", then the obvious choice is for the player to hit. The player can continue to hit as many times as they want. The turn is over when the player either busts or stays. If the player busts, the game is over, and the dealer won.

<br>

### Dealer turn
When the player stays, it's the dealer's turn. The dealer must follow a strict rule for determining whether to hit or stay: hit until the total is at least 17. If the dealer busts, then the player wins.

<br>

### Comparing cards
When both the player and the dealer stay, it's time to compare the total value of the cards and see who has the highest value.

<br>

### Player turn
The player always goes first, and can decide to either hit or stay. A hit means the player wants to be dealt another card. Remember, if his total exceeds 21, he will bust and lose the game. The decision to hit or stay depends on the player's cards and what the player thinks the dealer has. For example, if the dealer is showing a "10" (the other card is hidden), and the player has a "2" and a "4", then the obvious choice is for the player to hit. The player can continue to hit as many times as they want. The turn is over when the player either busts or stays. If the player busts, the game is over, and the dealer won.

<br>

### Dealer turn
When the player stays, it's the dealer's turn. The dealer must follow a strict rule for determining whether to hit or stay: hit until the total is at least 17. If the dealer busts, then the player wins.

<br>

### Comparing cards
When both the player and the dealer stay, it's time to compare the total value of the cards and see who has the highest value.