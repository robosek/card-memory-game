import * as React from 'react';
import './Panel.css'
import { RadioButton } from './RadioButton'
import { useOvermind } from '../overmind';

export const Panel: React.FunctionComponent = () => {

  const { state } = useOvermind()

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <RadioButton/>
        </div>
        <div className="form-group col-md-6">
          <input type="text" readOnly className="form-control-plaintext panel" placeholder={`Your score is ${state.totalScore} points!`} />
        </div>
      </div>
    </form>
  )
}