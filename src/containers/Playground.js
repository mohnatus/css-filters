import React from 'react';
import { connect } from 'react-redux';

import { useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Image from './Image';
import Applied from '../components/Applied/Applied';
import FiltersList from '../components/FiltersList';

import Hidden from '@material-ui/core/Hidden';
import ResultCode from '../components/ResultCode';
import {
  changeFilterValue,
  applyFilter,
  removeFilter,
  deactivateFilter,
  activateFilter,
  sortFilters,
} from '../redux/actions/filtersActions';

function Playground({
  applied,
  changeFilterValue,
  applyFilter,
  removeFilter,
  activateFilter,
  deactivateFilter,
  sortFilters,
}) {
  const theme = useTheme();

  return (
    <Container maxWidth='lg'>
      <div
        style={{
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
        }}
      >
        <Grid container spacing={3}>
          <Hidden mdUp>
            <Grid item xs={12}>
              <FiltersList
                applied={applied}
                onApply={applyFilter}
                view='inline'
              />
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <Image applied={applied} />

            <Applied
              list={applied}
              onChange={changeFilterValue}
              onRemove={removeFilter}
              onActivate={activateFilter}
              onDeactivate={deactivateFilter}
              onSort={sortFilters}
            />

            <ResultCode applied={applied} />
          </Grid>

          <Hidden smDown>
            <Grid item md={3}>
              <FiltersList
                applied={applied}
                onApply={applyFilter}
                view='block'
              />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ filters }) => {
  return {
    applied: filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterValue: (filterName, newValue) => {
      dispatch(changeFilterValue(filterName, newValue));
    },
    applyFilter: (filterName) => {
      dispatch(applyFilter(filterName));
    },
    removeFilter: (filterName) => {
      dispatch(removeFilter(filterName));
    },
    deactivateFilter: (filterName) => {
      dispatch(deactivateFilter(filterName));
    },
    activateFilter: (filterName) => {
      dispatch(activateFilter(filterName));
    },
    sortFilters: (filters) => {
      dispatch(sortFilters(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
