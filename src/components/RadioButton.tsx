import * as React from 'react';
//import { DropdownButton, Dropdown } from 'react-bootstrap'
import './Card.css'
import { useOvermind } from '../overmind';

export const RadioButton: React.FunctionComponent = () => {

    const { actions } = useOvermind()

    const onRadioChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = event.target.value
        actions.changeCardsNumber(parseInt(number));
    }
    
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-success">
                12 cards
            <input type="radio" name="options" id="option1" onChange={onRadioChanged}  autoComplete="off" value={12} checked={true}/>
            </label>
            <label className="btn btn-success">
                16 cards
            <input type="radio" name="options" id="option2" onChange={onRadioChanged} autoComplete="off" value={16}/>
            </label>
            <label className="btn btn-success">
                20 cards
            <input type="radio" name="options" id="option3" onChange={onRadioChanged} autoComplete="off" value={20}/>
            </label>
            <label className="btn btn-success">
                22 cards
            <input type="radio" name="options" id="option3" onChange={onRadioChanged} autoComplete="off" value={22}/>
            </label>
        </div>
    )
}