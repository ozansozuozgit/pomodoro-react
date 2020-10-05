import React from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
  font-size: 1.5em;
  color: red;
  text-align: center;
`;

const Title = () => {
  return (
    <div>
      <AppTitle>Pomodoro</AppTitle>
    </div>
  );
};

export default Title;
