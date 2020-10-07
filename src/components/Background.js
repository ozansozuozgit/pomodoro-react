import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import study from '../assets/study.gif';
import rest from '../assets/rest.gif';

const Background = () => {
  const modeContext = useContext(ModeContext);

  const { mode, isClockRunning } = modeContext;
  const [source, setSource] = useState(0);

  useEffect(() => {
    if (mode === 'study' && isClockRunning) {
      setSource(study);
    } else if (mode === 'rest' && isClockRunning) {
      setSource(rest);
    } else {
      setSource('');
    }
    // eslint-disable-next-line
  }, [isClockRunning]);

  return <BackgroundImage src={source}></BackgroundImage>;
};

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  left: 0;
  width: 100%;
`;

export default Background;
