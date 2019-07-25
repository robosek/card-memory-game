import * as React from 'react';
import './App.css';
import { Card } from './components/Card'
import { generateCards } from './modules/CardGenerator'
import { createOvermind } from 'overmind'
import { Config } from 'overmind'


const overmind =  createOvermind(config)

function App() {

  const cardsNumber:number = 10
  const randomNumbers = generateCards(cardsNumber)

  var cards:Array<JSX.Element> = []

  for (let i = 0; i<=cardsNumber; i++){
    cards.push(<Card key={i} HiddenValue={randomNumbers[i]}/>)
  }

  return (
    <div className="container App">
      <div className="alert alert-primary" role="alert">
        {cards}
      </div>
    </div>
  );
}

export default App;