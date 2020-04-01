import React from 'react';

import FiltersListButton from './FiltersListButton';

import { filters } from '../../data/filters';
import { Grid } from '@material-ui/core';

function FiltersList({ applied, onApply, view }) {

  const list = Object.keys(filters).map((filterName) => {
    return {
      name: filters[filterName].name,
      disabled: !!applied.find((filter) => filter.name === filterName),
    };
  });

  return (
    <Grid container spacing={1}>
      {list.map(({ name, disabled }) => {
        return (
          <Grid item key={name} xs="auto" md={12}>
            <FiltersListButton name={name} disabled={disabled} text={filters[name].info} onClick={onApply} view={view} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FiltersList;
