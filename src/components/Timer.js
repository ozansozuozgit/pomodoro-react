import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Timer = () => {
  const modeContext = useContext(ModeContext);

  const { timer } = modeContext;

  return <h1>{timer}</h1>;
};

export default Timer;
