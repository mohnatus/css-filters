import React, { createRef } from 'react';
import Code from './Code';
import {filters} from '../data/filters'

function Result({ applied }) {
  const active = applied.filter(({active}) => !!active);
  if (!active.length) return null;

  const css = active
      .map(({ name, value }) => {
        const filter = filters[name];
        return filter.css(value);
      })
      .join(' ');
  return <Code>filter: {css}</Code>
}

export default Result;
