import {
  CHANGE_MODE,
  SET_TIMER,
  UPDATE_TIMER,
  SET_CLOCK_RUNNING,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case SET_TIMER:
      return {
        ...state,
        timer: action.payload.time,
        totalSeconds: action.payload.seconds,
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timer: action.payload.time,
        totalSeconds: action.payload.secondsLeft,
      };
    case SET_CLOCK_RUNNING: {
      return { ...state, isClockRunning: action.payload };
    }
    default:
      return state;
  }
};
