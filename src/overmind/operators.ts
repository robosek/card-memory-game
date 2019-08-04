import { Operator, when, mutate, map, action, pipe } from 'overmind'
import { CardState, Card } from './state';
import { shuffle, generateKey } from '../utils'

type Path = {
    true: Operator
    false: Operator
}

export const setUnderVerification: () => Operator<number,number> = () => 
    mutate(({ state }, index) => {
        state.cards[index] = { ...state.cards[index], state: CardState.UnderVerification } 
        state.cardsUnderVerification = [...state.cardsUnderVerification, state.cards[index]]
    })

export const getCardIndexByKey: () => Operator<string,number> = () => 
    map(({ state }, key) => {
        return state.cards.findIndex(card => card.id === key)
    })

export const setAllUnderVerificationToRevelead: () => Operator = () => mutate(
    ({ state }) => {
       const cards = state.cards.filter(card => card.state === CardState.UnderVerification)
       cards.forEach(card => card.state = CardState.Revelead)
       state.revealedCards = [...state.revealedCards, ...cards]
    }
)

export const setAllUnderVerificationToUnrevelead: () => Operator = () => mutate(
    ({ state }) => {
       const cards = state.cards.filter(card => card.state === CardState.UnderVerification)
       cards.forEach(card => card.state = CardState.Unrevelead)
    }
)

export const setAllUnreveleadToBlocked: () => Operator = () => mutate(
    ({ state }) => {
       const cards = state.cards.filter(card => card.state === CardState.Unrevelead)
       cards.forEach(card => card.state = CardState.Blocked)
    }
)

export const setAllBlockedToUnrevelead: () => Operator = () => mutate(
    ({ state }) => {
       const cards = state.cards.filter(card => card.state === CardState.Blocked)
       cards.forEach(card => card.state = CardState.Unrevelead)
    }
)

export const canVerify: (paths: Path) => Operator = (paths) => when(
    ( {state} ) => state.cardsUnderVerification.length === 2, paths 
)

export const cardsAreEqual: (paths: Path) => Operator = (paths: Path) => when(
    ( {state} ) => {
        let [card1, card2] = state.cardsUnderVerification
        return card1.value === card2.value
    }, paths 
)

export const allCardsAreRevealed: (paths: Path) => Operator = (paths: Path) => when(
    ( {state} ) => state.revealedCards.length === state.numberOfCards, paths
)

export const clearUnderVerification: () => Operator = () => mutate(
    (({ state }) => state.cardsUnderVerification = [])
)

export const congratsAlert: () => Operator = () => action(
    ( {state} ) => {
        alert(`Congratulations! Your score is ${state.totalScore} points.`)
    }
)

export const clearGameState: () => Operator = () => mutate(
    ({ state }) => {
        state.revealedCards = []
        state.cardsUnderVerification = []
    }
)

export const generateShuffledCards: () => Operator = () => mutate(
    ({ state }) => {
        const cards:Array<Card> = []

        for (let i = 0; i < (state.numberOfCards / 2); i++) 
        {
            cards.push({id: generateKey(), value: i, state: CardState.Unrevelead, picturePath: `${i}.png`})
            cards.push({id: generateKey(), value: i, state: CardState.Unrevelead, picturePath: `${i}.png`})
        }

        state.cards =  shuffle(cards);
    }
)

export const startNewGame: () => Operator = () => pipe(
    clearTotalScore(),
    clearMissedChecks(),
    clearGameState(),
    generateShuffledCards()
)

export const setNewCardsNumber: () => Operator<number> = () => mutate(
    ( {state}, cardsNumber) => {
        state.numberOfCards = cardsNumber 
    }
)

export const incrementMissedChecks: () => Operator = () => mutate(
    ( {state} ) => state.missedChecks += 1
)

export const clearMissedChecks: () => Operator = () => mutate(
    ( {state} ) => state.missedChecks = 0
)

export const clearTotalScore: () => Operator = () => mutate(
    ( {state} ) => state.totalScore = 0
)

export const countScore: () => Operator = () => mutate(
    ( {state} ) => {
        const missedChecks = state.missedChecks
        
        if(missedChecks === 0)
            state.totalScore += 10
        else if(missedChecks >= 1 && missedChecks <=3)
            state.totalScore +=5
        else if(missedChecks > 3 && missedChecks < 10)
            state.totalScore +=1
        else 
            state.totalScore +=0
    }
)

