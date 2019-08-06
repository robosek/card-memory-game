import * as React from 'react';
import './Card.css'
import './RadioButton.css'
import { useOvermind } from '../overmind';

export const RadioButton: React.FunctionComponent = () => {

    const { actions, state } = useOvermind()
    const first = 12 
    const second = 16
    const third = 20
    const fourth = 22

    const onRadioChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = event.target.value
        actions.changeCardsNumber(parseInt(number));
    }

    return (
        <div className="center">
            <label>
                12
            <input type="radio" name="cards-number" value={12} id="radio-one" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === first}/>
            </label>
            <label>
                16
            <input type="radio" name="cards-number" value={16} id="radio-x" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === second} />
            </label>            
            <label>
                20
            <input type="radio" name="cards-number" value={20} id="radio-o" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === third}/>
            </label>            
            <label>
                22
            <input type="radio" name="cards-number" value={22} id="radio-ne" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === fourth}/>
            </label>
        </div>
    )
}