import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Filter from './Filter';
import { ReactSortable } from 'react-sortablejs';

FiltersList.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

function FiltersList({ order, values, onChange, onSort }) {
  function sortHandler(list) {
    onSort(list.map((item) => item.filterName));
  }
  return (
    <ReactSortable
      list={order.map((filterName) => ({ filterName }))}
      setList={sortHandler}
      className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3'
      tag={Grid}
      handle='.dnd-handle'
      dragoverBubble
      emptyInsertThreshold={20}
      animation={150}
    >
      {order.map((filterName) => {
        return (
          <Grid item key={filterName} xs={12} sm={6} lg={4}>
            <Filter
              filterName={filterName}
              filterValue={values[filterName]}
              onChange={onChange}
            />
          </Grid>
        );
      })}
    </ReactSortable>
  );
}

export default FiltersList;
