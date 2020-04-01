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

import { filters } from '../data/filters';

import CircularSlider from '@fseehawer/react-circular-slider';

function Filter({ filterName, value, onChange, onRemove }) {
  const filter = filters[filterName];

  const changeHandler = (newValue) => {
    onChange(filterName, newValue);
  };

  const linearSliderChangeHandler = (event, newValue) => {
    changeHandler(newValue);
  }

  const roundSliderChangeHandler = (newValue) => {
    console.log('in filter', newValue)
    changeHandler(newValue);
  }

  const resetHandler = () => {
    onChange(filterName, filter.defaultValue);
  };

  const removeHandler = () => {
    onRemove(filterName);
  };

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

        <pre>
          filter: {filter.name}({value}
          {filter.unit});
        </pre>
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

        <Button fullWidth>COPY</Button>
      </CardActions>
      
    </Card>
  );
}

export default Filter;
