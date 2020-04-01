import React from 'react';

import FiltersListButton from './FiltersListButton';

import { filters } from '../../data/filters';
import { Grid } from '@material-ui/core';

function FiltersList({ applied, onApply, view }) {

  const list = Object.keys(filters).map((filterName) => {
    return {
      filterName,
      disabled: !!applied.find((filter) => filter.name === filterName),
    };
  });

  return (
    <Grid container spacing={1}>
      {list.map(({ filterName, disabled }) => {
        return (
          <Grid item key={filterName} xs="auto" md={12}>
            <FiltersListButton filterName={filterName} disabled={disabled} onClick={onApply} view={view} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FiltersList;
