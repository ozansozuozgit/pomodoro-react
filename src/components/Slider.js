import React, { useContext, useState } from 'react';
import ModeContext from '../context/modeContext';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
`;

const Slider = () => {
  const modeContext = useContext(ModeContext);

  const { setTimer } = modeContext;

  const [slider, setSlider] = useState(25);

  const onSlide = (e) => {
    const minutes = e.target.value;
    setSlider(minutes);
    setTimer(`${minutes < 10 ? '0' : ''}${minutes}:00`,minutes *60);
  };

  return (
    <Input
      type="range"
      name="slider"
      min="1"
      max="60"
      value={slider}
      onChange={onSlide}
    />
  );
};

export default Slider;
