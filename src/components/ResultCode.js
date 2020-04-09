import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Code from './UI/Code';
import { filterCSS } from '../data/filters';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(4)
  }
}));

ResultCode.propTypes = {
  applied: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

function ResultCode({ applied }) {
  const classes = useStyles();
  const active = applied.filter(({ active }) => !!active);
  if (!active.length) return null;

  const css = active
    .map(({ name, value }) => {
      return filterCSS(name, value);
    })
    .join(' ');
  return (
    <div className={classes.root}>
      <Code>filter: {css}</Code>
    </div>
  );
}

export default ResultCode;
