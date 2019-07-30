import * as React from 'react';
import { CardProps } from './Types'
import './Card.css'
import { CardState } from '../overmind/state';
import { overmind } from '../overmind';

export class Card extends React.Component<CardProps> {


    render(){
        if(this.props.CardState === CardState.Unrevelead){
            return (
                <div className="card" onClick={() => overmind.actions.hideCard({key: this.props.UniqueKey})}>
                    <p>{this.props.BackSign}</p>
                </div>
            )
        }
        else{
            return (
                <div className="card" onClick={() => overmind.actions.showCard({key: this.props.UniqueKey})}>
                    <p>{this.props.HiddenValue}</p>
                </div>
            )
        }
    }
}