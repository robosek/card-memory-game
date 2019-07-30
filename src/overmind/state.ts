export type State = {
  numberOfCards: number
  revealedCards: Map<string,Card>
  cardsUnderVerification: Map<string, Card>
  cards: Map<string, Card>
  cardBackSign: string
}

export enum CardState{
  Revelead,
  Unrevelead,
  UnderVerification
}

export type Card = {
  value: number
  state: CardState
}

export const state: State = {
  numberOfCards: 12,
  revealedCards: new Map(),
  cards: new Map(),
  cardsUnderVerification: new Map(),
  cardBackSign: "X"
}