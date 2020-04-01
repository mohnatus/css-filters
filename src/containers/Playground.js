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
import { changeFilterValue, applyFilter, removeFilter } from '../redux/actions';

const url =
  'https://ovdi.ru/upload/iblock/37d/37d8e94a3b157ad89c3d2909baefadbe.jpg';

function Playground({ applied, changeFilterValue, applyFilter, removeFilter }) {
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
              <FiltersList applied={applied} onApply={applyFilter} view='inline' />
            </Grid>
          </Hidden>

          <Grid item xs={12} md={9}>
            <Images applied={applied} url={url} />

            <Actions />

            <Applied
              list={applied}
              onChange={changeFilterValue}
              onRemove={removeFilter}
            />
          </Grid>

          <Hidden smDown>
            <Grid item md={3}>
              <FiltersList applied={applied} onApply={applyFilter} view='block' />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ applied }) => {
  return {
    applied,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
