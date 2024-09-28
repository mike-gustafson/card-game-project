/*  Requirements
---------------------------------------------------------------------------------------------------------------
1. Declare variables (arrays) for two decks of cards.                                              | complete |
2. Create HTML elements (two <div>s) for the card decks:                                           | complete |
  1. Deck 1 should display the back of a card with a shadow outline, indicating a larger stack.    | complete |
  2. Deck 2 should display an empty card outline.                                                  | complete |
3. Create cached element references for each of the card decks.                                    | complete |
4. Add an event listener for the "Flip" button.                                                    | complete |
5. Write an initialization function that assigns 52 cards" to deck 1, then invoke it.              | complete |
6. Declare a render() function to display a card after it is flipped.                              | complete |
7. Stub up a handleClick() function for the event listener to call.                                | complete |
  1. Select a random card from deck 1.                                                             | complete |
  2. Remove the card from deck 1.                                                                  | complete |
  3. Add the card to deck 2.                                                                       | complete |
  4. Call the render() function and pass the card to it.                                           | complete |
8. Within the render() function (situated above handleClick()):                                    | complete |
  1. After the first card is picked, remove the outline on deck 2.                                 | complete |
  2. Add the class name to display the card picked on deck 2.                                      | complete |
  3. When half of the cards are flipped, move the shadow from deck 1 to deck 2.                    | complete |
  4. When the final card is picked, add an outline to deck 1.                                      | complete |
---------------------------------------------------------------------------------------------------------------
*/

let deckDraw = []
let deckDiscard = []
let dealTarget = 'discard'
let dealOrigin = 'drawDeck'

const deck1El = document.querySelector('#deck-1')
const deck2El = document.querySelector('#deck-2')
  
const init = () => {
    deckDraw = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  }
  
const renderCard = () => {
  if (deckDiscard.length > 0) {
    if (deckDiscard.length >= deckDraw.length) {
      deck2El.setAttribute('class', `card large shadow ${deckDiscard[0]}`)
      deck1El.setAttribute('class', `card large back-blue`)
    } else {
      deck2El.setAttribute('class', `card large ${deckDiscard[0]}`)
      deck1El.setAttribute('class', `card large back-blue shadow`)
    }
  } else {
    deck2El.setAttribute('class', `card large outline`)
  }
  if (deckDraw.length === 0) {
    deck1El.setAttribute('class', `card large outline`)
  }
}

const dealCard = (origin, target) => {
  if (target === 'discard' && origin === 'drawDeck') {
    if (deckDraw.length > 0) {
      const nextCardIdx = Math.floor(Math.random()*deckDraw.length)
      const nextCard = deckDraw[nextCardIdx]
      deckDraw.splice(nextCardIdx, 1)
      deckDiscard.unshift(nextCard)
      console.log(`Discard Pile: ${deckDiscard}`)
      console.log(`Draw Deck: ${deckDraw}`)
    } else {
      deckDiscard = [deckDiscard[0]]
      init()
    }
  }
}

const handleClick = () => {
    dealCard(dealOrigin, dealTarget)   
    renderCard()
  }
  
document.querySelector('#btn').addEventListener('click', handleClick)

init()