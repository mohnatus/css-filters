import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { filters } from '../data/filters';
import { styled } from '@material-ui/core';

function Filter({ name, value, onChange, onRemove }) {
  const filter = filters[name];

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const changeHandler = (_, newValue) => {
    onChange(filter.name, newValue);
  };

  const resetHandler = () => {
    onChange(filter.name, filter.defaultValue);
  };

  const removeHandler = () => {
    onRemove(filter.name);
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
        <Slider {...sliderParams} onChange={changeHandler} />
        <pre>
          filter: {filter.name}({value}
          {filter.unit});
        </pre>
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label='copy css code'>
          <CopyIcon />
        </IconButton> */}
        {/* <IconButton aria-label='info'>
          <InfoIcon />
        </IconButton> */}

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
