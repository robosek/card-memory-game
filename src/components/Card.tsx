import * as React from 'react';
import { CardProps } from './Types'
import './Card.css'
import { CardState } from '../overmind/state';
import { useOvermind } from '../overmind';

export const Card: React.FunctionComponent<CardProps> = ({card, backSign}) => {

    const { actions } = useOvermind()
    const { tryCard } = actions

    if (card.state === CardState.Unrevelead){
        return (
            <div className="game-card game-card-back" onClick={() => tryCard(card.id)}>
            </div>
        )
    }
    else if(card.state === CardState.Blocked){
        return(
            <div className="game-card game-card-back">
        </div>
        )
    }
    else if(card.state === CardState.UnderVerification){
        return (
            <div className="game-card">
                <h1>{card.value}</h1>
            </div>
        )
    }
    else{
        return (
            <div className="game-card game-card-revealed">
                <h1>{card.value}</h1>
            </div>
        )
    }
}