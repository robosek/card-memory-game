import { Action } from 'overmind'
import { shuffle, generateKey } from '../utils'
import { Card, CardState } from './state'

export const generateCards: Action = ({ state }) => {
    const cards:Array<Card> = []

    for (let i = 0; i <= (state.numberOfCards / 2); i++) {

        cards.push({value: i, state: CardState.Unrevelead})
        cards.push({value: i, state: CardState.Unrevelead})
    }

    const shuffledCards = shuffle(cards);
    shuffledCards.map(card => state.cards.set(generateKey(),card))
}

export const hideCard: Action<{key: string}> = ({state}, {key}) => {

    let card = state.cards.get(key)
    console.log({card})
    if(card){
        state.cards.set(key, {...card, state:CardState.Unrevelead})
    }
}

export const showCard: Action<{ key: string }> = ({ state }, {key}) => {
    let card = state.cards.get(key)
    console.log({ card })
    if (card) {
        state.cards.set(key, { ...card, state: CardState.UnderVerification })
    }
}

export const putOnVerification: Action<{card: Card}> = ({ state }, { card }) => {
    
    // if(state.cardsUnderVerification.length==0){
    //     state.cards
    //     state.cardsUnderVerification.push(card)
    // }
    // else if (state.cardsUnderVerification.length == 1) {
    //     const card1 = state.cardsUnderVerification[0]


    // }
    // else{
    //     state.cardsUnderVerification = []
    //     state.cardsUnderVerification.push(card)
    // }
}
