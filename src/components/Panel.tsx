import * as React from 'react';
import './Panel.css'
import { RadioButton } from './RadioButton'
import { useOvermind } from '../overmind';

export const Panel: React.FunctionComponent = () => {

  const { state } = useOvermind()

  return (
    <form>
      <div className="center">
        <div className="form-group col-md-12">
            <RadioButton/>
        </div>
        <div className="form-group col-md-12">
          <input type="text" readOnly className="form-control-plaintext input-score " placeholder={`Score: ${state.totalScore} points`} />
        </div>
      </div>
    </form>
  )
}