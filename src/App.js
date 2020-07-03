import React from 'react';
import './App.css';
import GenieLamp from './components/GenieLamp';
import SecretBox from './components/SecretBox';
import TreasureChest from './components/TreasureChest';

function App() {
  return (
    <div className="App">
      <h1>Охота за сокровищами</h1>
      <GenieLamp />
      <SecretBox />
      <TreasureChest />
    </div>
  );
}

export default App;
