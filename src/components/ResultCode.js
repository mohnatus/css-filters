import React from 'react';
import Code from './UI/Code';
import { filters } from '../data/filters';

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
