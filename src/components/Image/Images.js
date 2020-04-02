import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { filters } from '../../data/filters';

Images.propTypes = {
  applied: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      name: PropTypes.string,
      value: PropTypes.number,
    }),
  ),
};

function Images({ applied, url }) {
  const filterCSS = applied
    .filter(({ active }) => active)
    .map(({ name, value }) => {
      const filter = filters[name];
      return filter.css(value);
    })
    .join(' ');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {/* eslint-disable-next-line */}
        <img src={url} alt='Original image without filters' />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* eslint-disable-next-line */}
        <img
          src={url}
          alt='Image with applied filters'
          style={{ filter: filterCSS }}
        />
      </Grid>
    </Grid>
  );
}

export default Images;
