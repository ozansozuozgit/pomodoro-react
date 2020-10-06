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
  font-size: 8em;
  padding: 30px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 0 10px white;
`;

export default Timer;
