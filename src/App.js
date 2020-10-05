import React, { Fragment } from 'react';
import Title from './components/Title';
import ModeState from './context/ModeState';
import ModeButtons from './components/ModeButtons';
import Timer from './components/Timer';
import Slider from './components/Slider';
import ActionButton from './components/ActionButton';

function App() {
  return (
    <ModeState>
      <Fragment>
        <Title />
        <ModeButtons />
        <Timer />
        <Slider />
        <ActionButton />
      </Fragment>
    </ModeState>
  );
}

export default App;
