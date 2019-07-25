import * as React from 'react';
import { CardProps } from './Types'
import './Card.css'

export class Card extends React.Component<CardProps,{value:number}> {

    constructor(props:CardProps){
        super(props)
        this.state = {
            value: -1
        }
    }

    changeValues = () => this.setState({value: this.props.HiddenValue})

    render(){
        return(
        <div className="card" onClick={() => this.changeValues()}>
            <p>{this.state.value}</p>
        </div>)
    }
}