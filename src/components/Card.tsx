import * as React from 'react';
import { CardProps } from './Types'
import './Card.css'
import { CardState } from '../overmind/state';
import { useOvermind } from '../overmind';

export const Card: React.FunctionComponent<CardProps> = ({UniqueKey, HiddenValue, BackSign}) => {

    const { actions } = useOvermind()
    const { showCard, getCard } = actions
    const card = getCard(UniqueKey)

    if (card.state === CardState.Unrevelead){
        return (
            <div className="card" onClick={() => showCard(UniqueKey)}>
                <h1>{BackSign}</h1>
            </div>
        )
    }
    else{
        return (
            <div className="card">
                <h1>{HiddenValue}</h1>
            </div>
        )
    }
}