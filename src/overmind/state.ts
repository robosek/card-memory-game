export type State = {
  numberOfCards: number
  revealedCards: Array<Card>
  cardsUnderVerification: Array<Card>
  cards: Array<Card>
  cardBackSign: string
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
}

export const state: State = {
  numberOfCards: 12,
  revealedCards: [],
  cards: [],
  cardsUnderVerification: [],
  cardBackSign: "X",

}