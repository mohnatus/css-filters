import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ResetIcon from '@material-ui/icons/Close';
import UpIcon from '@material-ui/icons/ArrowDropUp';
import DragIndicator from '@material-ui/icons/DragIndicator';
import Code from '../UI/Code';
import { isDefaultValue, filters, filterCSS } from '../../data/filters';

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
  root: (isActive) => ({
    display: 'flex',
    borderRadius: 'inherit',
    overflow: 'hidden',
    backgroundColor: isActive ? palette.primary[100] : palette.background.paper,
  }),
  title: {
    display: 'flex',
    flexGrow: 1,
  },
  panel: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    padding: spacing(2),
    paddingRight: 0,
    flexGrow: 1,
  },
  value: {
    textTransform: 'none',
  },
  actions: {
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  info: {
    borderRadius: 0,
  },
  slider: {
    marginTop: spacing(2),
  },
}));

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterValue: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

function Filters({ filterName, filterValue, onChange }) {
  const isActive = !isDefaultValue(filterName, filterValue);
  const classes = useStyles(isActive);
  const { name, min, max, step, unit, mdn, defaultValue } = filters[filterName];

  const [isOpen, setOpen] = useState(false);

  const sliderParams = {
    value: filterValue,
    min: min,
    max: max,
    step: step,
  };

  const changeHandler = useCallback(
    (_, value) => {
      onChange(filterName, value);
    },
    [filterName, onChange],
  );

  const MdnReference = (
    <Tooltip title='MDN reference'>
      <IconButton
        aria-label='MDN reference'
        color='primary'
        href={mdn}
        target='_blank'
        rel='noopener noreferrer nofollow'
        component={Link}
      >
        <InfoIcon />
      </IconButton>
    </Tooltip>
  );

  const resetHandler = useCallback(() => {
    onChange(filterName, defaultValue);
  }, [filterName, onChange, defaultValue]);

  return (
    <Paper>
      <div className={classes.root}>
        <div className={`${classes.handle} dnd-handle`}>
          <DragIndicator />
        </div>

        {isOpen ? (
          <div className={classes.panel}>
            <div className={classes.content}>
              <Code>filter: {filterCSS(filterName, filterValue)};</Code>
              <Slider
                className={classes.slider}
                {...sliderParams}
                onChange={changeHandler}
              />
            </div>
            <div className={classes.actions}>
              <Tooltip title='Minimize'>
                <IconButton
                  aria-label='minimize'
                  onClick={() => setOpen(false)}
                >
                  <UpIcon />
                </IconButton>
              </Tooltip>
              {MdnReference}
              {isActive ? (
                <Tooltip title='Reset'>
                  <IconButton
                    color='primary'
                    aria-label='reset'
                    onClick={resetHandler}
                  >
                    <ResetIcon />
                  </IconButton>
                </Tooltip>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={classes.title}>
            <Button className={classes.content} onClick={() => setOpen(true)}>
              <Typography variant='subtitle1'>{name}</Typography>
              &nbsp;
              <Typography
                className={classes.value}
                variant='subtitle1'
                color='primary'
              >
                {filterValue}
                {unit}
              </Typography>
            </Button>
            {MdnReference}
          </div>
        )}
      </div>
    </Paper>
  );
}

export default Filters;
