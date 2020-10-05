import {
  START_TIMER,
  STOP_TIMER,
  CHANGE_MODE,
  SET_TIMER,
  CHANGE_BACKGROUND,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload.mode,
        timer: action.payload.time,
      };
    case SET_TIMER:
      return {
        ...state,
        timer: action.payload,
        totalSeconds: action.payload * 60,
      };
    default:
      return state;
  }
};
