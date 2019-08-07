import * as React from 'react';
import './Panel.css'
import { RadioButton } from './RadioButton'
import { useOvermind } from '../overmind';
import { Dictionary } from '../overmind/state';

export const Panel: React.FunctionComponent<{ totalScore: number, gameLevel:Dictionary<number> }> = ({totalScore, gameLevel}) => {

  useOvermind()

  return (
    <form>
      <div className="center">
        <div className="form-group col-md-12">
            <RadioButton gameLevel={gameLevel} />
        </div>
        <div className="form-group col-md-12">
          <input type="text" readOnly className="input-score form-control-plaintext" placeholder={`${totalScore} points`} />
        </div>
      </div>
    </form>
  )
}