import { Operator, pipe, wait, when, noop, action, mutate } from 'overmind'
import { CardState, Card } from './state';

export const setUnrevelead: Operator<Card> = 
    mutate((_, card) => {
        card.state = CardState.Unrevelead
    })

export const setRevelead: Operator<Card> =
    mutate((_, card) => {
        card.state = CardState.Revelead
    })

export const setUnderVerificatoin: Operator<Card> =
    mutate((_, card) => {
        card.state = CardState.UnderVerification
    })

export const fillUnderVerifcation: Operator<Card> =
    mutate(({state}, card) => {
        state.cardsUnderVerification = [...state.cardsUnderVerification, card]
    })

export const getCardByKey: Operator<string> = 
    action(({ state }, key) => {
        const cardIndex = state.cards.findIndex(card => card.id === key)
        return state.cards[cardIndex]
    })

export const putOnVerification: Operator = 
    pipe(
        wait(1000),
        when(({ state }) => state.cardsUnderVerification.length == 2, 
        {
            true:action(({ state }) => {

                const [card1, card2] = state.cardsUnderVerification
                state.cardsUnderVerification = []

                if(card1.value === card2.value){
                    card1.state = CardState.Revelead
                    card1.state = CardState.Revelead
                    state.revealedCards = [...state.revealedCards, card1, card2]
                }
                else{
                    card1.state = CardState.Unrevelead
                    card1.state = CardState.Unrevelead
                }
            }), 
            false:noop()
        })
    )