import React, { useReducer } from 'react';
import ModeContext from './modeContext';
import modeReducer from './modeReducer';

import { START_TIMER, STOP_TIMER, CHANGE_MODE, SET_TIMER } from './types';

const ModeState = (props) => {
  const initialState = {
    mode: 'study',
    timer: 25,
    start: false,
  };

  const [state, dispatch] = useReducer(modeReducer, initialState);

  return (
    <ModeContext.Provider
      value={{
        mode: state.mode,
        timer: state.timer,
        start: state.start,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeState;
