import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Close';
import { filters } from '../data/filters';

function Filter({ name, value, onChange, onRemove }) {
  const filter = filters[name];

  const changeHandler = (_, newValue) => {
    onChange(filter.name, newValue);
  };

  const removeHandler = () => {
    onRemove(filter.name);
  };

  const RemoveButton = (
    <IconButton aria-label='remove' onClick={removeHandler}>
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
      <CardHeader action={RemoveButton} subheader={filter.name} title={`${value}${filter.unit}`} />
      <CardContent>
        <Slider {...sliderParams} onChange={changeHandler} />
      </CardContent>
      {/* <CardActions>
        <IconButton aria-label='add to favorites'>
          <RemoveIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}

export default Filter;
