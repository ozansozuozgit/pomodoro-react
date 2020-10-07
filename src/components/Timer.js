import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Timer = () => {
  const modeContext = useContext(ModeContext);

  const { timer, mode } = modeContext;

  return <TimerDisplay mode={mode}>{timer}</TimerDisplay>;
};

const TimerDisplay = styled.span`
  color: ${(props) => (props.mode === 'study' ? '#ff5656' : '#61DBFB')};
  font-size: 8em;
  padding: 30px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 15px;
  box-shadow: 0 0 10px
    ${(props) => (props.mode === 'study' ? '#ff5656' : '#61DBFB')};
  width: 280px;
`;

export default Timer;
