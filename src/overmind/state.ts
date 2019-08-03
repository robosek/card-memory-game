export type State = {
  numberOfCards: number
  revealedCards: Array<Card>
  cardsUnderVerification: Array<Card>
  cards: Array<Card>
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
  numberOfCards: 10,
  revealedCards: [],
  cards: [],
  cardsUnderVerification: []

}