import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

Images.propTypes = {
  css: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Images({ css, url }) {
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
          style={{ filter: css }}
        />
      </Grid>
    </Grid>
  );
}

export default Images;
