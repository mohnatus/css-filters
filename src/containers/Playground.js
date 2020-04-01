import React from 'react';
import { connect } from 'react-redux';

import { useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Images from '../components/Images';
import Applied from '../components/Applied';
import FiltersList from '../components/FiltersList';
import Actions from '../components/Actions';
import Hidden from '@material-ui/core/Hidden';
import Result from '../components/Result';
import {
  changeFilterValue,
  applyFilter,
  removeFilter,
  deactivateFilter,
  activateFilter,
  sortFilters
} from '../redux/actions/filtersActions';

const url =
  'https://ovdi.ru/upload/iblock/37d/37d8e94a3b157ad89c3d2909baefadbe.jpg';

function Playground({ applied, changeFilterValue, applyFilter, removeFilter, activateFilter, deactivateFilter, sortFilters }) {
  const theme = useTheme();

  console.log(theme)

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
            <Images applied={applied} url={url} />

            <Actions />

            <Applied
              list={applied}
              onChange={changeFilterValue}
              onRemove={removeFilter}
              onActivate={activateFilter}
              onDeactivate={deactivateFilter}
              onSort={sortFilters}
            />

            <Result applied={applied} />
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
      dispatch(sortFilters(filters))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
