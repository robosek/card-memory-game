import * as React from 'react';
import './App.css';
import { Card } from './components/Card'
import { Provider } from 'overmind-react'
import { overmind, useOvermind } from './overmind/index'

const App = () => {

  const { state } = useOvermind()
  const { cardBackSign } = state
  const { cards } = state

  return (
    <Provider value={overmind}>
      <div className="container App">
        <div className="alert alert-primary" role="alert">
          {cards.map(card => <Card UniqueKey={card.id} key={card.id} CardState={card.state} BackSign={cardBackSign} HiddenValue={card.value} />)}
        </div>
      </div>
    </Provider>
  );
}

export default App;