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
} from './types';

const ModeState = (props) => {
  const initialState = {
    mode: 'study',
    totalSeconds: 0,
    isClockRunning: false,
    background: null,
    timer: 1,
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
    dispatch({ type: UPDATE_TIMER, payload: { time, secondsLeft } });
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
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeState;
