import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Close';
import DragHandle from '@material-ui/icons/DragHandle';
import Code from '../UI/Code';
import RoundSlider from '../UI/RoundSlider';
import { filters } from '../../data/filters';

const useStyles = makeStyles(({ palette }) => ({
  handle: {
    height: 30,
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    '&:hover': {
      backgroundColor: palette.primary.dark
    }
  },
}));

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,

  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};

function Filter({
  filterName,
  active,
  value,
  onChange,
  onRemove,
  onActivate,
  onDeactivate,
}) {
  const classes = useStyles();
  const activeStyle = {
    opacity: active ? 1 : 0.5,
  };

  const filter = filters[filterName];

  function changeHandler(newValue) {
    onChange(filterName, newValue);
  }
  function linearSliderChangeHandler(event, newValue) {
    changeHandler(newValue);
  }
  function resetHandler() {
    onChange(filterName, filter.defaultValue);
  }
  function removeHandler() {
    onRemove(filterName);
  }
  function deactivateHandler() {
    onDeactivate(filterName);
  }
  function activateHandler() {
    onActivate(filterName);
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
      <div className={`${classes.handle} dnd-handle`}>
        <DragHandle />
      </div>
      <CardHeader
        style={activeStyle}
        action={RemoveButton}
        subheader={filter.name}
        title={`${value}${filter.unit}`}
      />
      <CardContent style={activeStyle}>
        {filter.shape === 'circular' ? (
          <RoundSlider {...sliderParams} onChange={changeHandler} />
        ) : (
          <Slider {...sliderParams} onChange={linearSliderChangeHandler} />
        )}

        <Code>filter: {filter.css(value)};</Code>
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

        {active ? (
          <Button fullWidth onClick={deactivateHandler}>
            DEACTIVATE
          </Button>
        ) : (
          <Button color='secondary' fullWidth onClick={activateHandler}>
            ACTIVATE
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Filter;
