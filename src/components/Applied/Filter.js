import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Close';
import Zero from '@material-ui/icons/ExposureZero';
import DragIndicator from '@material-ui/icons/DragIndicator';
import PowerSettings from '@material-ui/icons/PowerSettingsNew';
import Code from '../UI/Code';
import { filters, filterCSS } from '../../data/filters';
import { useCallback } from 'react';

const useStyles = makeStyles(({ palette, spacing }) => ({
  handle: {
    width: 30,
    flexShrink: 0,
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    '&:hover': {
      backgroundColor: palette.primary.dark,
    },
  },
  root: {
    display: 'flex',
    borderRadius: 'inherit',
    overflow: 'hidden',
  },
  content: ({ active }) => ({
    padding: spacing(2),
    paddingRight: 0,
    flexGrow: 1,
    opacity: active ? 1 : 0.6,
  }),
  actions: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  slider: {
    marginTop: spacing(2),
  },
  activate: ({ active }) => ({
    color: active ? palette.primary.main : palette.text.disabled,
  }),
  reset: ({ value, filter }) => ({
    color:
      value === filter.defaultValue
        ? palette.primary.main
        : palette.text.disabled,
  }),
}));

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,

  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleActivate: PropTypes.func.isRequired,
};

function Filter({
  filterName,
  active,
  value,
  onChange,
  onRemove,
  onToggleActivate,
}) {
  const filter = filters[filterName];
  const classes = useStyles({ active, value, filter });

  const sliderParams = {
    value: value,
    min: filter.min,
    max: filter.max,
    step: filter.step,
  };

  const removeHandler = useCallback(() => {
    onRemove(filterName)
  }, [filterName, onRemove]);

  const toggleActivateHandler = useCallback(() => {
    onToggleActivate(filterName)
  }, [filterName, onToggleActivate]);

  const changeHandler = useCallback((event, value) => {
    onChange(filterName, value);
  }, [filterName, onChange]);

  const resetHandler = useCallback(() => {
    onChange(filterName, filter.defaultValue);
  }, [filterName, onChange, filter]);

  return (
    <Paper>
      <div className={classes.root}>
        <div className={`${classes.handle} dnd-handle`}>
          <DragIndicator />
        </div>
        <div className={classes.content}>
          <Code>filter: {filterCSS(filterName, value)};</Code>
          <Slider
            className={classes.slider}
            {...sliderParams}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Tooltip title='Remove'>
            <IconButton
              aria-label='remove'
              onClick={removeHandler}
              color='primary'
            >
              <RemoveIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={active ? 'Deactivate' : 'Activate'}>
            <IconButton
              className={classes.activate}
              aria-label={active ? 'deactivate' : 'activate'}
              onClick={toggleActivateHandler}
            >
              <PowerSettings />
            </IconButton>
          </Tooltip>
          <Tooltip title='Reset'>
            <IconButton
              className={classes.reset}
              aria-label='reset'
              onClick={resetHandler}
            >
              <Zero />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </Paper>
  );
}

export default Filter;
