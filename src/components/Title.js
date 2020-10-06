import React from 'react';
import styled from 'styled-components';

const AppTitle = styled.h1`
  font-size: 2.9em;
  color: red;
  ${'' /* text-align: center; */}
  margin: 0;
  padding-top: 1em;
`;

const Title = () => {
  return <AppTitle>Pomodoro</AppTitle>;
};

export default Title;
