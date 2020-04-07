import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Image from './Image';
import Applied from '../components/Applied/Applied';
import FiltersList from '../components/FiltersList';
import ResultCode from '../components/ResultCode';
import {
  changeFilterValue,
  applyFilter,
  removeFilter,
  deactivateFilter,
  activateFilter,
  sortFilters,
} from '../redux/actions/filtersActions';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
}));

function Playground({
  applied,
  changeFilterValue,
  applyFilter,
  removeFilter,
  activateFilter,
  deactivateFilter,
  sortFilters,
}) {
  const classes = useStyles();

  return (
    <Container maxWidth='lg'>
      <div className={classes.root}>
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
            <Grid item xs={12} md={3}>
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
