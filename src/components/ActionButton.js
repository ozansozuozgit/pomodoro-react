import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const ActionButton = () => {
  const modeContext = useContext(ModeContext);

  const { isClockRunning, updateTimer, totalSeconds } = modeContext;
  const [clockRunning, setClockRunning] = useState(false);

  const intervalRef = useRef();

  const startTimer = () => {
    setClockRunning(clockRunning === false ? true : false);
    const now = Date.now();
    const then = now + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);

    let countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);

    intervalRef.current = countdown;
  };

  const stopTimer = () => {
    console.log('stop');
    setClockRunning(clockRunning === true ? false : true);
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
    <button onClick={clockRunning === false ? startTimer : stopTimer}>
      {clockRunning === false ? 'Start' : 'Stop'}
    </button>
  );
};

export default ActionButton;
