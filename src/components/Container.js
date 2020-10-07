import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Container = (props) => {
  const modeContext = useContext(ModeContext);

  const { isClockRunning } = modeContext;

  return (
    <PomodoroContainer start={isClockRunning ? 1 : 0}>
      {props.children}
    </PomodoroContainer>
  );
};

const PomodoroContainer = styled.div`
  background-color: ${(props) => (props.start ? '' : 'black')};
  height: 100vh;
  text-align: center;
  font-family: 'Anton', sans-serif;
`;
export default Container;
