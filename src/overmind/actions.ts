import { Action, wait, pipe } from 'overmind'
import { shuffle, generateKey } from '../utils'
import { Card, CardState, State } from './state'

const putOnVerification = (state: State ,card: Card) => {
    const { revealedCards, cardsUnderVerification } = state

    if (cardsUnderVerification.length < 1){
        state.cardsUnderVerification = [...cardsUnderVerification, card]
    }
    else if (cardsUnderVerification.length === 1){
        const card1 = cardsUnderVerification[0]
        state.cardsUnderVerification = []
        if(card1){
            if (card1.value === card.value) {
                card1.state = CardState.Revelead
                card.state = CardState.Revelead
                state.revealedCards = [...revealedCards, card1, card]
            }
            else {
                card1.state = CardState.Unrevelead
                card.state = CardState.Unrevelead
            }
        }
    }
}

export const generateCards: Action = ({ state }) => {
    const cards:Array<Card> = []

    for (let i = 0; i <= (state.numberOfCards / 2); i++) 
    {
        cards.push({id: generateKey(), value: i, state: CardState.Unrevelead})
        cards.push({id: generateKey(), value: i, state: CardState.Unrevelead})
    }

    state.cards = shuffle(cards);
}

export const hideCard: Action<string> = ({state}, key) => {
    const cardIndex = state.cards.findIndex(card => card.id === key)
    const card = state.cards[cardIndex]
    card.state = CardState.Unrevelead
}

export const showCard: Action<string> = ({ state }, key) => {
    const cardIndex = state.cards.findIndex(card => card.id === key)
    const card = state.cards[cardIndex]
    card.state = CardState.UnderVerification
    putOnVerification(state, card);
}

export const getCard: Action<string, Card> = ({state}, key) => {
    const cardIndex = state.cards.findIndex(card => card.id === key)
    return state.cards[cardIndex]
}