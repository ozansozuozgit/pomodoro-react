import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const ModeButton = ({ name }) => {
  const modeContext = useContext(ModeContext);

  const { mode, changeMode } = modeContext;

  const Name = styled.button`
    color: ${name === 'study' ? 'red' : 'blue'};
    &:hover {
      opacity: 0.8;
    }
  `;

  const onChange = () => {
    if (name === 'study') {
      changeMode(name, 30);
    } else {
      changeMode(name, 10);
    }
  };

  return <Name onClick={onChange}>{name}</Name>;
};

// disabled={mode === name ? 0 : 1}

export default ModeButton;
