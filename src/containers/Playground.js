import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from './Image';
import FiltersList from '../components/FiltersList';
import Code from '../components/UI/Code';
import * as actions from '../redux/actions/filtersActions';
import { isDefaultValue, filterCSS } from '../data/filters';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    paddingTop: spacing(3),
    paddingBottom: spacing(3),
  },
}));

function Playground({ filters, changeFilterValue, sortFilters }) {
  const classes = useStyles();

  const appliedFiltersCSSString = filters.order
    .map((filterName) => {
      const filterValue = filters.values[filterName];
      if (isDefaultValue(filterName, filterValue)) return null;
      return filterCSS(filterName, filterValue);
    })
    .filter(Boolean)
    .join(' ');

  return (
    <Container maxWidth='lg'>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Image css={appliedFiltersCSSString} />
          </Grid>
          <Grid item xs={12}>
            <FiltersList {...filters} onChange={changeFilterValue} onSort={sortFilters} />
          </Grid>
          <Grid item xs={12}>
            {appliedFiltersCSSString ? <Code>filter: {appliedFiltersCSSString}</Code> : null}
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterValue: (filterName, newValue) => {
      dispatch(actions.changeFilterValue(filterName, newValue));
    },
    sortFilters: (filters) => {
      dispatch(actions.sortFilters(filters));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
