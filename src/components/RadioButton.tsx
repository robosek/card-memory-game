import * as React from 'react';
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
            <label className="btn btn-secondary">
                12 cards
            <input type="radio" name="options" id="option1" onChange={onRadioChanged}  autoComplete="off" value={12} />
            </label>
            <label className="btn btn-secondary">
                16 cards
            <input type="radio" name="options" id="option2" onChange={onRadioChanged} autoComplete="off" value={16}/>
            </label>
            <label className="btn btn-secondary">
                20 cards
            <input type="radio" name="options" id="option3" onChange={onRadioChanged} autoComplete="off" value={20}/>
            </label>
            <label className="btn btn-secondary">
                22 cards
            <input type="radio" name="options" id="option3" onChange={onRadioChanged} autoComplete="off" value={22}/>
            </label>
        </div>
    )
}