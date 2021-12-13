import React from 'react';
import axios from 'axios';
import Button from './components/Button';
import './App.css';

function App() {

  const displayCharacter = (character) => <p key={character.id}>{character.name} aka. {character.nickname}</p>

  return (
    <div className="App">
      <div className="container">
        <h3>Character Fetcher</h3>
        <Button />
      </div>
    </div>
  );
}

export default App;
