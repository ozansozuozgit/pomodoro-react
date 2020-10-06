import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Timer = () => {
  const modeContext = useContext(ModeContext);

  const { timer } = modeContext;

  return <TimerDisplay>{timer}</TimerDisplay>;
};

const TimerDisplay = styled.span`
  color: rgb(40, 93, 162);
`;

export default Timer;
