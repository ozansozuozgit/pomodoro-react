import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import alarm from '../assets/alarm.mp3';

const Timer = () => {
  const modeContext = useContext(ModeContext);

  const {
    isClockRunning,
    updateTimer,
    totalSeconds,
    mode,
    timer,
    changeMode,
    setTimer,
    setClockRunning,
  } = modeContext;

  useEffect(() => {
    if (isClockRunning) {
      startTimer();
    } else {
      stopTimer();
    }
    // eslint-disable-next-line
  }, [isClockRunning]);

  const intervalRef = useRef();

  let alarmAudio = new Audio(alarm);
  alarmAudio.volume = 0.5;

  const startTimer = () => {
    const now = Date.now();
    const then = now + totalSeconds * 1000;
    displayTimeLeft(totalSeconds);

    let countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        alarmAudio.play();
        clearInterval(countdown);
        setClockRunning(false);
        if (mode === 'study') {
          changeMode('rest');
          setTimer('10:00', 10 * 60);
        } else {
          changeMode('study');
          setTimer('25:00', 25 * 60);
        }
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
