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
        <div>
          {cards.map(card => <Card key={card.id} card={card} backSign={cardBackSign}  />)}
        </div>
      </div>
    </Provider>
  );
}

export default App;