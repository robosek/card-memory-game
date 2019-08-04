import { pipe, Operator, noop, wait } from 'overmind'
import * as o from './operators'

const showMissedCardsTimeMs = 600

export const startNewGame: Operator = o.startNewGame()

export const changeCardsNumber: Operator<number> = pipe(
    o.setNewCardsNumber(),
    o.startNewGame()
) 

export const tryCard : Operator<string> = pipe(
    o.getCardIndexByKey(),
    o.setUnderVerification(),
    o.canVerify({
        true: o.cardsAreEqual({
            true:pipe(
                o.countScore(),
                o.clearMissedChecks(),
                o.setAllUnderVerificationToRevelead(), 
                o.clearUnderVerification()
            ),
            false:pipe(
                o.incrementMissedChecks(),
                o.setAllUnreveleadToBlocked(),
                wait(showMissedCardsTimeMs),
                o.setAllBlockedToUnrevelead(),
                o.setAllUnderVerificationToUnrevelead(), 
                o.clearUnderVerification()
            )
        }),
        false: noop()
    }),
    o.allCardsAreRevealed({
        true:pipe(
            wait(200),
            o.congratsAlert(),
            o.startNewGame()
        ),
        false:noop()
    })
)