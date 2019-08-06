import * as React from 'react';
import './Panel.css'
import { RadioButton } from './RadioButton'
import { useOvermind } from '../overmind';

export const Panel: React.FunctionComponent<{totalScore: number}> = (score) => {

  useOvermind()

  return (
    <form>
      <div className="center">
        <div className="form-group col-md-12">
            <RadioButton/>
        </div>
        <div className="form-group col-md-12">
          <input type="text" readOnly className="input-score form-control-plaintext" placeholder={`${score.totalScore} points`} />
        </div>
      </div>
    </form>
  )
}