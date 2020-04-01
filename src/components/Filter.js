import React from 'react';
import Slider from '@material-ui/core/Slider';
import RoundSlider from './RoundSlider';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Close';
import Code from './Code';

import { filters } from '../data/filters';

import CircularSlider from '@fseehawer/react-circular-slider';

function Filter({ filterName, value, onChange, onRemove }) {
  const filter = filters[filterName];

  function changeHandler(newValue) {
    onChange(filterName, newValue);
  };

  function linearSliderChangeHandler(event, newValue) {
    changeHandler(newValue);
  }

  function roundSliderChangeHandler(newValue) {
    console.log('in filter', newValue)
    changeHandler(newValue);
  }

  function resetHandler() {
    onChange(filterName, filter.defaultValue);
  };

  function removeHandler() {
    onRemove(filterName);
  };

  function deactivateHandler() {

  }

  const RemoveButton = (
    <IconButton aria-label='remove' onClick={removeHandler} color='primary'>
      <RemoveIcon />
    </IconButton>
  );

  const sliderParams = {
    value: value,
    min: filter.min,
    max: filter.max,
    step: filter.step,
  };

  return (
    <Card>
      <CardHeader
        action={RemoveButton}
        subheader={filter.name}
        title={`${value}${filter.unit}`}
      />
      <CardContent>
        {filter.shape === 'circular' ? (
          <RoundSlider {...sliderParams} onChange={roundSliderChangeHandler} />
        ) : (
          <Slider {...sliderParams} onChange={linearSliderChangeHandler} />
        )}

        <Code>
          filter: {filter.name}({value}
          {filter.unit});
        </Code>

      </CardContent>
      <CardActions>
        <Button
          color={value === filter.defaultValue ? 'secondary' : 'default'}
          fullWidth
          aria-label='reset'
          onClick={resetHandler}
        >
          RESET
        </Button>

        <Button fullWidth onClick={deactivateHandler}>DEACTIVATE</Button>
      </CardActions>

    </Card>
  );
}

export default Filter;
