import React, { useState } from 'react';
import Slider from 'react-slider';
import styles from "./advanceFilter.module.scss";

const RangeSlider = ({ min, max, step }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider
        className={styles.slider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
      />
      <div className={styles.sliderLabels}>
        <span>${min}M</span>
        <span>${value[0]}M - ${value[1]}M</span>
        <span>${max}M</span>
      </div>
    </div>
  );
};

export default RangeSlider;
