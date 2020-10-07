import React, { useContext } from 'react';
import Title from './components/Title';
import ModeState from './context/ModeState';
import ModeButtons from './components/ModeButtons';
import Timer from './components/Timer';
import Slider from './components/Slider';
import ActionButton from './components/ActionButton';
import Background from './components/Background';
import Container from './components/Container';

import styled from 'styled-components';

const App = () => {
  return (
    <ModeState>
      <Container>
        <Background />
        <Title />
        <ModeButtons />
        <Timer />
        <Slider />
        <ActionButton />
      </Container>
    </ModeState>
  );
};

export default App;
