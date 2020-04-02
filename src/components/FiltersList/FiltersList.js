import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FiltersListButton from './FiltersListButton';
import { filters } from '../../data/filters';

FiltersList.propTypes = {
  applied: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  onApply: PropTypes.func.isRequired,
};

function FiltersList({ applied, onApply }) {
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
          <Grid item key={filterName} xs='auto' md={12}>
            <FiltersListButton
              filterName={filterName}
              disabled={disabled}
              onClick={onApply}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default FiltersList;
