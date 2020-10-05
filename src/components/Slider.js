import React, { useContext, useState } from 'react';
import ModeContext from '../context/modeContext';

const Slider = () => {
  const modeContext = useContext(ModeContext);

  const { setTimer } = modeContext;

  const [slider, setSlider] = useState(25);

  const onSlide = (e) => {
    setSlider(e.target.value);
    setTimer(e.target.value);
  };

  return (
    <input
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
