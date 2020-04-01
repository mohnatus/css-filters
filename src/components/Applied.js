import React from 'react';
import Grid from '@material-ui/core/Grid';

import Filter from './Filter';

const Applied = ({ list, ...callbacks }) => {
  return (
    <Grid container spacing={3}>
      {list.map(({ name, value, active }) => {
        return (
          <Grid item key={`filter-${name}`} xs={12} sm={6} md={4}>
            <Filter
              value={value}
              filterName={name}
              active={active}
              {...callbacks}
            />
          </Grid>
        );
      })}
      <div></div>
    </Grid>
  );
};

export default Applied;
