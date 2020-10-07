import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const ModeButton = ({ name }) => {
  const modeContext = useContext(ModeContext);

  const { setTimer, changeMode } = modeContext;

  const onChange = () => {
    if (name === 'STUDY') {
      changeMode('study');
      setTimer('25:00', 25 * 60);
    } else {
      changeMode('rest');
      setTimer('10:00', 10 * 60);
    }
  };

  return (
    <Name mode={name} onClick={onChange}>
      {name}
    </Name>
  );
};

const Name = styled.button`
  background-color: ${(props) => (props.mode === 'STUDY' ? '#ff5656' : '#61DBFB')};
  border: none;
  border-radius: 15px;
  font-size: 1.8em;
  width: 150px;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.8;
  }
`;

export default ModeButton;
