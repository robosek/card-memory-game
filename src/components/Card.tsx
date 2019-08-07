import * as React from 'react';
import { CardProps } from './Types'
import './Card.css'
import { CardState } from '../overmind/state';
import { useOvermind } from '../overmind';

export const Card: React.FunctionComponent<CardProps> = ({ card }) => {

    const { actions } = useOvermind()
    const { tryCard } = actions

    if (card.state === CardState.Unrevelead){
        return (
            <div className="game-card game-card-back" onClick={() => tryCard(card.id)}>
                <img src={require(`../pictures/back.png`)} alt="" className="img-fluid" />
            </div>
        )
    }
    else if(card.state === CardState.Blocked){
        return(
            <div className="game-card game-card-back">
                 <img src={require(`../pictures/back.png`)} alt="" className="img-fluid"/>
        </div>
        )
    }
    else if(card.state === CardState.UnderVerification){
        return (
            <div className="game-card game-card-under-verification">
                <img src={require(`../pictures/${card.picturePath}`)} alt="" className="img-fluid"/>
            </div>
        )
    }
    else{
        return (
            <div className="game-card game-card-revealed">
               <img src={require(`../pictures/${card.picturePath}`)} alt="" className="img-fluid"/>
            </div>
        )
    }
}