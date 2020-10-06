import React, { Fragment } from 'react';
import Title from './components/Title';
import ModeState from './context/ModeState';
import ModeButtons from './components/ModeButtons';
import Timer from './components/Timer';
import Slider from './components/Slider';
import ActionButton from './components/ActionButton';
import styled from 'styled-components';

function App() {
  return (
    <ModeState>
      <Container>
        <Title />
        <ModeButtons />
        <Timer />
        <Slider />
        <ActionButton />
      </Container>
    </ModeState>
  );
}

const Container = styled.div`
  background-color: black;
  height: 100vh;
  text-align: center;
`;

export default App;
