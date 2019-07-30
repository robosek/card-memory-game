import * as React from 'react';
import './App.css';
import { Card } from './components/Card'
import { Provider } from 'overmind-react'
import { overmind } from './overmind/index'

function App() {

  overmind.actions.generateCards()
  const backSign = overmind.state.cardBackSign
  const cardKeys = Array.from(overmind.state.cards.entries())
  
  return (
    <Provider value={overmind}>
      <div className="container App">
        <div className="alert alert-primary" role="alert">
          {cardKeys.map(entry => <Card UniqueKey={entry[0]} key={entry[0]} CardState={entry[1].state} BackSign={backSign} HiddenValue={entry[1].value} />)}
        </div>
      </div>
    </Provider>
  );
}

export default App;