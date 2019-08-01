export type State = {
  numberOfCards: number
  revealedCards: Array<Card>
  cardsUnderVerification: Array<Card>
  cards: Array<Card>
  cardBackSign: string
  underVerificationNumber: number
}

export enum CardState{
  Revelead,
  Unrevelead,
  UnderVerification
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
  get underVerificationNumber() {
    return this.cardsUnderVerification.length
  },
  cardBackSign: "X",

}