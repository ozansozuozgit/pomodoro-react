import React, { useReducer } from 'react';
import ModeContext from './modeContext';
import modeReducer from './modeReducer';

import {
  START_TIMER,
  STOP_TIMER,
  CHANGE_MODE,
  SET_TIMER,
  CHANGE_BACKGROUND,
  UPDATE_TIMER,
  SET_CLOCK_RUNNING,
} from './types';

const ModeState = (props) => {
  const initialState = {
    mode: 'study',
    totalSeconds: 1500,
    isClockRunning: false,
    background: null,
    timer: '25:00',
  };

  const [state, dispatch] = useReducer(modeReducer, initialState);

  // Change mode
  const changeMode = (mode, time) => {
    dispatch({ type: CHANGE_MODE, payload: { mode, time } });
  };

  // Set Time
  const setTimer = (time) => {
    dispatch({ type: SET_TIMER, payload: time });
  };

  // Start Timer
  const updateTimer = (time, secondsLeft) => {
    dispatch({
      type: UPDATE_TIMER,
      payload: { time, secondsLeft },
    });
  };

  // Set is clock running
  const setClockRunning = (clockRunning) => {
    dispatch({
      type: SET_CLOCK_RUNNING,
      payload: clockRunning,
    });
  };

  return (
    <ModeContext.Provider
      value={{
        mode: state.mode,
        timer: state.timer,
        totalSeconds: state.totalSeconds,
        isClockRunning: state.isClockRunning,
        changeMode,
        setTimer,
        updateTimer,
        setClockRunning,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeState;
