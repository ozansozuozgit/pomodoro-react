import React from 'react';
import './App.css';
import Title from './components/Title';
import ModeState from './context/ModeState';

function App() {
  return (
    <ModeState>
      <div className="App">
        <Title />
      </div>
    </ModeState>
  );
}

export default App;
