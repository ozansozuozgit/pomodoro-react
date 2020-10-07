import React, { useContext, useState, useEffect } from 'react';
import ModeContext from '../context/modeContext';
import styled from 'styled-components';

const Slider = () => {
  const modeContext = useContext(ModeContext);

  const { setTimer, mode, totalSeconds } = modeContext;

  useEffect(() => {
    setSlider(totalSeconds / 60);
  }, [totalSeconds]);

  const [slider, setSlider] = useState(25);

  const onSlide = (e) => {
    const minutes = e.target.value;
    setSlider(minutes);
    setTimer(`${minutes < 10 ? '0' : ''}${minutes}:00`, minutes * 60);
  };

  return (
    <Input
      type="range"
      name="slider"
      min="1"
      max="60"
      value={slider}
      onChange={onSlide}
      mode={mode}
    />
  );
};

const Input = styled.input`
  -webkit-appearance: none;
  display: block;
  border: 1px solid rgba(255, 0, 80, 0.55);
  margin: 30px auto;
  border-radius: 10px;
  width: 300px;
  background: black;
  height: 20px;
  border-color: ${(props) => (props.mode === 'study' ? '#ff5656' : '#61DBFB')};

  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    background: #ffffff;
    border-radius: 50%;
  }

  &:focus {
    outline: none;
    cursor: pointer;
  }
`;

export default Slider;
