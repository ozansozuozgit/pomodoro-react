import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import modeSound from '../assets/modeSound.mp3';

const ModeButton = ({ name }) => {
  const modeContext = useContext(ModeContext);

  const { setTimer, changeMode, isClockRunning } = modeContext;

  let actionAudio = new Audio(modeSound);
  actionAudio.volume = 0.2;

  const onChange = () => {
    actionAudio.play();

    if (name === 'STUDY') {
      changeMode('study');
      setTimer('25:00', 25 * 60);
    } else {
      changeMode('rest');
      setTimer('10:00', 10 * 60);
    }
  };

  return (
    <Name
      mode={name}
      onClick={onChange}
      disabled={isClockRunning === true ? true : false}
    >
      {name}
    </Name>
  );
};

const Name = styled.button`
  background-color: ${(props) =>
    props.mode === 'STUDY' ? '#ff5656' : '#61DBFB'};
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
