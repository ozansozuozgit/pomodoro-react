import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Name = styled.button`
  color: ${(props) => (props.mode === 'study' ? 'red' : 'blue')};
  &:hover {
    opacity: 0.8;
  }
`;

const ModeButton = ({ name }) => {
  const modeContext = useContext(ModeContext);

  const { setTimer, changeMode } = modeContext;

  const onChange = () => {
    if (name === 'study') {
      changeMode(name);
      setTimer('25:00', 25 * 60);
    } else {
      changeMode(name);
      setTimer('10:00', 10 * 60);
    }
  };

  return (
    <Name mode={name} onClick={onChange}>
      {name}
    </Name>
  );
};

// disabled={mode === name ? 0 : 1}

export default ModeButton;
