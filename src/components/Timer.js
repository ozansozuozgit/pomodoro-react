import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Timer = () => {
  const modeContext = useContext(ModeContext);

  const {
    isClockRunning,
    updateTimer,
    totalSeconds,
    mode,
    timer,
  } = modeContext;

  useEffect(() => {
    console.log('clock');
    if (isClockRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  // eslint-disable-next-line 
  }, [isClockRunning]);

  const intervalRef = useRef();

  const startTimer = () => {
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
