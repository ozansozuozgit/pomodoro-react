import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import actionSound from '../assets/actionSound.mp3';

const ActionButton = () => {
  const modeContext = useContext(ModeContext);

  const { isClockRunning, mode, setClockRunning } = modeContext;

  let actionAudio = new Audio(actionSound);
  actionAudio.volume = 0.1;

  const timerAction = () => {
    actionAudio.play();
    if (isClockRunning === false) {
      setClockRunning(true);
    } else {
      setClockRunning(false);
    }
  };

  return (
    <Button onClick={timerAction} mode={mode}>
      {isClockRunning === false ? 'START' : 'PAUSE'}
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3.2em;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.mode === 'study' ? '#ff5656' : '#61DBFB')};

  &:hover {
    opacity: 0.8;
  }
`;

export default ActionButton;
