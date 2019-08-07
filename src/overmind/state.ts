export interface Dictionary<T> {
  [Key: string]: T;
}

export type State = {
  numberOfCards: number
  revealedCards: Array<Card>
  cardsUnderVerification: Array<Card>
  cards: Array<Card>,
  missedChecks:number,
  totalScore: number,
  gameLevel: Dictionary<number>
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
  totalScore: 0,
  gameLevel:{ "1":12, "2":16, "3":20, "4":22 }
}