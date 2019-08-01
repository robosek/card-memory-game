import { Action, pipe, wait, Operator } from 'overmind'
import { shuffle, generateKey } from '../utils'
import { Card, CardState } from './state'
import * as o from './operators'


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
    state.cardsUnderVerification = [...state.cardsUnderVerification, card]

}

export const getCard: Action<string, Card> = ({state}, key) => {
    const cardIndex = state.cards.findIndex(card => card.id === key)
    return state.cards[cardIndex]
}