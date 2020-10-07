import React, { useContext, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import study from '../assets/study.gif';
import rest from '../assets/rest.gif';

const Background = () => {
  const modeContext = useContext(ModeContext);

  const { mode } = modeContext;

  return (
    <Fragment>
      <BackgroundImage
        src={study}
        index={mode === 'study' ? true : false}
      ></BackgroundImage>
      <BackgroundImage src={rest} index={'rest'}></BackgroundImage>
    </Fragment>
  );
};

const BackgroundImage = styled.img`
  position: absolute;
  z-index: ${(props) => (props.index === true ? '-1' : '-2')};
  height: 100%;
  left: 0;
  width: 100%;
`;

export default Background;
