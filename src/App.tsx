import * as React from 'react';
import './App.css';
import { Card } from './components/Card'
import { Panel } from './components/Panel'
import { Provider } from 'overmind-react'
import { overmind, useOvermind } from './overmind/index'

const App = () => {

  const { state } = useOvermind()
  const { cards } = state

  return (
    <Provider value={overmind}>
      <div className="container App">
      <img src={require(`./pictures/title.png`)} alt="" className="img-responsive center"/>
        <Panel />
        <div className="flex-container">
          {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
      </div>
    </Provider>
  );
}

export default App;