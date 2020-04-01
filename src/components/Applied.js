import React from 'react';
import { filters } from '../data/filters';
import Grid from '@material-ui/core/Grid';

import Filter from './Filter';

const Applied = ({ list, onChange, onRemove }) => {
  return (
    <Grid container spacing={3}>
      {list.map(({ name, value }) => {
        return (
          <Grid item key={`filter-${name}`} xs={12} sm={6} md={4}>
            <Filter
              value={value}
              filterName={name}
              onChange={onChange}
              onRemove={onRemove}
            />
          </Grid>
        );
      })}
      <div></div>
    </Grid>
  );
};

export default Applied;
