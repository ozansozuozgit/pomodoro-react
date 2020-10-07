import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import study from '../assets/study.gif';
import rest from '../assets/rest.gif';

const Background = () => {
  const modeContext = useContext(ModeContext);

  const { mode } = modeContext;

  return (
    <BackgroundImage src={mode === 'study' ? study : rest}></BackgroundImage>
  );
};

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  left: 0;
  width: 100%;
`;

export default Background;
