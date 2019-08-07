import * as React from 'react';
import './Card.css'
import './RadioButton.css'
import { useOvermind } from '../overmind';
import { Dictionary } from '../overmind/state';

export const RadioButton: React.FunctionComponent<{ gameLevel: Dictionary<number> }> = ({ gameLevel }) => {

    const { actions, state } = useOvermind()

    const onRadioChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const number = event.target.value
        actions.changeCardsNumber(parseInt(number));
    }

    return (
        <div className="center">
            <label>
                { gameLevel["1"] }
            <input type="radio" name="cards-number" value={gameLevel["1"]} id="1" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === gameLevel["1"]}/>
            </label>
            <label>
                {gameLevel["2"]}
                <input type="radio" name="cards-number" value={gameLevel["2"]} id="2" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === gameLevel["2"]}/>
            </label>            
            <label>
                {gameLevel["3"]}
                <input type="radio" name="cards-number" value={gameLevel["3"]} id="3" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === gameLevel["3"]}/>
            </label>            
            <label>
                {gameLevel["4"]}
                <input type="radio" name="cards-number" value={gameLevel["4"]} id="4" className="form-radio" onChange={onRadioChanged} checked={state.numberOfCards === gameLevel["4"]}/>
            </label>
        </div>
    )
}