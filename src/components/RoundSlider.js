import React, { useEffect, createRef } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import Input from '@material-ui/core/Input';

function RoundSlider({ value, min, max, step, onChange }) {
  function changeHandler(newValue) {
    console.log('change', newValue);
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
        hideLabelValue
        onChange={sliderChangeHandler}
      />
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
        }}
        onChange={inputChangeHandler}
      />
    </div>
  );
}

export default RoundSlider;
