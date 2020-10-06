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
    >
      {isClockRunning === false ? 'START' : 'STOP'}
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.8em;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.start === false ? 'red' : 'blue')};
  &:hover {
    opacity: 0.8;
  }
`;

export default ActionButton;
