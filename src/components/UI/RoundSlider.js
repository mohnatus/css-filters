import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import CircleIcon from '@material-ui/icons/FiberManualRecord';
import CircularSlider from '@fseehawer/react-circular-slider';

const useStyles = makeStyles({
  root: {
    width: 160,
    margin: '0 auto',
    position: 'relative',
  },
  input: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    zIndex: 2,
  },
});

RoundSlider.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function RoundSlider({ value, min, max, step, onChange }) {
  const classes = useStyles();
  const { palette } = useTheme();

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
    <div className={classes.root}>
      <div>
        <CircularSlider
          dataIndex={value}
          width={160}
          knobPosition='top'
          knobColor={palette.primary.main}
          hideLabelValue
          min={min}
          max={max}
          onChange={sliderChangeHandler}
          progressColorFrom={palette.primary.light}
          progressColorTo={palette.primary.main}
          progressSize={5}
          trackSize={5}
          trackColor={palette.grey[100]}
        >
          <CircleIcon color='primary' fontSize='inherit' />
        </CircularSlider>
      </div>
      <Input
        type='number'
        autoFocus
        className={classes.input}
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
