import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const ActionButton = () => {
  const modeContext = useContext(ModeContext);

  const {
    isClockRunning,
    setClockRunning,
    updateTimer,
    totalSeconds,
    mode,
  } = modeContext;

  const intervalRef = useRef();

  const startTimer = () => {
    setClockRunning(true);
    const now = Date.now();
    const then = now + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);

    let countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);

    intervalRef.current = countdown;
  };

  const stopTimer = () => {
    setClockRunning(false);
    clearInterval(intervalRef.current);
  };

  const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    let timer = `${minutes < 10 ? '0' : ''}${minutes}:${
      remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    updateTimer(timer, seconds);
  };

  return (
    <Button
      onClick={isClockRunning === false ? startTimer : stopTimer}
      start={isClockRunning}
      mode={mode}
    >
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
