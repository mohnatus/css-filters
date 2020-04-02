import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Filter from './Filter';
import { ReactSortable } from 'react-sortablejs';

Applied.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      active: PropTypes.bool,
    }),
  ).isRequired,
  onSort: PropTypes.func.isRequired,
};

function Applied({ list, onSort, ...callbacks }) {
  return (
    <ReactSortable
      list={list}
      setList={onSort}
      className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3'
      tag={Grid}
      handle='.dnd-handle'
      dragoverBubble
      emptyInsertThreshold={20}
      animation={150}
    >
      {list.map(({ name, value, active }) => {
        return (
          <Grid item key={name} xs={12} sm={6} md={4}>
            <Filter
              value={value}
              filterName={name}
              active={active}
              {...callbacks}
            ></Filter>
          </Grid>
        );
      })}
    </ReactSortable>
  );
}

export default Applied;
