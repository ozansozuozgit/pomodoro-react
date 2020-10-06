import React, { useContext } from 'react';
import styled from 'styled-components';
import ModeContext from '../context/modeContext';
import ModeButton from './ModeButton';

const Container = styled.div`
  background-color: red;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const ModeButtons = () => {
  const modeContext = useContext(ModeContext);

  const { mode } = modeContext;

  return (
    <div>
      <Container>
        <ModeButton name="study" />
        <ModeButton name="rest" />
      </Container>
    </div>
  );
};

export default ModeButtons;
