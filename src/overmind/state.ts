export type State = {
  numberOfCards: number
  revealedCards: Array<Card>
  cardsUnderVerification: Array<Card>
  cards: Array<Card>,
  missedChecks:number,
  totalScore: number
}

export enum CardState{
  Revelead,
  Unrevelead,
  UnderVerification,
  Blocked
}

export type Card = {
  id: string
  value: number
  state: CardState
  picturePath: string
}

export const state: State = {
  numberOfCards: 12,
  revealedCards: [],
  cards: [],
  cardsUnderVerification: [],
  missedChecks: 0,
  totalScore: 0
}