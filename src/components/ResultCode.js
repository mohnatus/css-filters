import React from 'react';
import PropTypes from 'prop-types';
import Code from './UI/Code';
import { filters } from '../data/filters';

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
  const active = applied.filter(({ active }) => !!active);
  if (!active.length) return null;

  const css = active
    .map(({ name, value }) => {
      const filter = filters[name];
      return filter.css(value);
    })
    .join(' ');
  return <Code>filter: {css}</Code>;
}

export default ResultCode;
