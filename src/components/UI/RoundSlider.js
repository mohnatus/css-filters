import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import Input from '@material-ui/core/Input';
import { useTheme } from '@material-ui/core';
import CircleIcon from '@material-ui/icons/FiberManualRecord';

function RoundSlider({ value, min, max, step, onChange }) {
  const theme = useTheme();
  function changeHandler(newValue) {
    if (newValue === value) return;
    onChange(newValue);
  }

  function sliderChangeHandler(newValue) {
    changeHandler(newValue);
  }
  function inputChangeHandler(event) {
    changeHandler(event.target.value);
  }

  return (
    <div style={{ width: 160, margin: '0 auto', position: 'relative' }}>
      <CircularSlider
        dataIndex={value}
        width={160}
        knobPosition='top'
        knobColor={theme.palette.primary.main}
        hideLabelValue
        min={min}
        max={max}
        onChange={sliderChangeHandler}
        progressColorFrom={theme.palette.primary.light}
        progressColorTo={theme.palette.primary.main}
        progressSize={5}
        trackSize={5}
        trackColor={theme.palette.grey[100]}
      >
        <CircleIcon color='primary' fontSize='inherit' />
      </CircularSlider>
      <Input
        type='number'
        autoFocus
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          zIndex: 2,
        }}
        value={value}
        inputProps={{
          style: { textAlign: 'center' },
          min,
          max,
          step,
        }}
        onChange={inputChangeHandler}
      />
    </div>
  );
}

export default RoundSlider;
