import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';

const Title = () => {
  const modeContext = useContext(ModeContext);

  const { mode } = modeContext;

  return <AppTitle mode={mode}>Pomodoro</AppTitle>;
};

const AppTitle = styled.h1`
  font-size: 2.9em;
  color: ${(props) => (props.mode === 'study' ? '#ff5656' : '#61DBFB')};
  ${'' /* text-align: center; */}
  margin: 0;
  padding-top: 1em;
`;

export default Title;
