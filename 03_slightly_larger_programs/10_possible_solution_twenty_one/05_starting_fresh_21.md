# 21

TwentyOne is a card game whereby the goal is to get as close to the total of 21 as possible without going over. 
If you go over you loose that hand to the dealer(your competitor).
The game uses a 52 card deck.
There are four suits (Hearts, Diamonds, Spaces and Clubs) and there are 13 cards per suit.
The 13 cards a numbers 2 to 10, a Jack(worth 10), a Queen(worth 10), a King(worth 10) and an Ace(worth 1 or 11).
If an Ace is dealt it will initially be worth 11, if a player Hits and the score goes over 21 then for each Ace encountered that allows their score to still total over 21 the Ace will become worth 1, reducing their total by 10.

The game starts with the User being dealt two cards face up and the dealer being dealt two cards(one face up, one face down). The User tally's their cards and decides to either 'Hit'(get dealt another card to increase their total) or 'Stick'(keep their current total). The user can Hit as many times as they wish but if the User goes above 21 then they loose that hand and the game is over.

The user can Stick at any point below 21 and then it is the dealers turn to try to beat your score and get closer to 21 without going over or at least to get a higher total than you. If the dealer goes over then you win the hand.

If both players have 21 then the game is tied. 

The dealer must Hit while their total is below 17.
The dealer must Stick when their hand totals 17 to 21.

<br>

## User Flow

- START
- INITIALIZE DECK
- SHUFFLE DECK
- DEAL INITIAL CARDS
  - USER: 2 CARDS
    - SHOW BOTH CARDS
  - DEALER: 2 CARDS
    - SHOW ONLY 1 CARD
- SHOW USER TOTAL
- USERS TURN
  - IS TOTAL > 21
    - YES
      - DISPLAY BUST => DEALER WINS
      - WOULD YOU LIKE TO PLAY AGAIN
      - YES
        - START GAME LOOP AGAIN
      - NO
- END
    - NO
      - IS TOTAL === 21
        - YES 
          - DEALER TURN
        - NO
          - HIT OR STICK
            - HIT
              - DEAL 1 CARD TO USER
              - SHOW TOTAL
                -  IS TOTAL > 21
                   - YES
                     - DISPLAY BUST => DEALER WINS
                     - WOULD YOU LIKE TO PLAY AGAIN
                       - YES
                         - START GAME LOOP AGAIN
                       - NO
- END
                - NO
                 - IS TOTAL === 21
                   - YES 
                     - DEALER TURN
                   - NO
                     - HIT OR STICK
                       - STICK
                         - DEALER TURN
                         - SHOW DEAL CARDS
                         - SHOW DEALER TOTAL
                         - IS DEALER TOTAL > 21
                           - YES
                            - DISPLAY BUST => USER WINS 
                            - WOULD YOU LIKE TO PLAY AGAIN
                              - YES
                                - START GAME LOOP AGAIN
                              - NO
  - END 
                           - NO
                             - IS TOTAL === 21 
                               - NO
                             - IS TOTAL >= 17
                               - YES
                                 - AUTO STICK
                                   - COMPARE USER TOTAL TO DEALER TOTAL 
                                     - IF USER TOTAL === DEALER TOTAL 
                                       - DISPLAY TIE
                                     - IF USER TOTAL > DEALER TOTAL 
                                       - DISPLAY USER WINS
                                     - IF DEALER TOTAL > USER TOTAL
                                       - DISPLAY DEALER WINS
                               - NO
                                 - DEALER MUST HIT
                                   - IS TOTAL === 21 
                                     - NO
                                   - IS TOTAL >= 17
                                     - YES
                                       - AUTO STICK
                                         - COMPARE USER TOTAL TO DEALER TOTAL 
                                           - IF USER TOTAL === DEALER TOTAL 
                                             - DISPLAY TIE
                                           - IF USER TOTAL > DEALER TOTAL 
                                             - DISPLAY USER WINS
                                           - IF DEALER TOTAL > USER TOTAL
                                             - DISPLAY DEALER WINS 
- WOULD YOU LIKE TO PLAY AGAIN
  - YES
    - START GAME LOOP AGAIN
  - NO
- END