import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const ActionButton = () => {
  const modeContext = useContext(ModeContext);

  const { isClockRunning, updateTimer, totalSeconds } = modeContext;

  const timer = () => {
    if (isClockRunning === false) {
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
    }
  };

  const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    let timer = `${minutes < 10 ? '0' : ''}${minutes}:${
      remainderSeconds < 10 ? '0' : ''
    }${remainderSeconds}`;
    console.log(timer);
    updateTimer(timer);
  };

  return (
    <button onClick={timer}>
      {isClockRunning === false ? 'Start' : 'Stop'}
    </button>
  );
};

export default ActionButton;
