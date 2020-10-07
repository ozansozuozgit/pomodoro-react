import React from 'react';
import styled from 'styled-components';
import ModeButton from './ModeButton';

const Container = styled.div`
  width: 350px;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
`;

const ModeButtons = () => {
  return (
    <div>
      <Container>
        <ModeButton name="STUDY" />
        <ModeButton name="REST" />
      </Container>
    </div>
  );
};

export default ModeButtons;
