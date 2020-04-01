
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {filters} from '../data/filters';

const Images = ({ applied, url }) => {

  const filterCSS = applied.map(({ name, value }) => {
    const filter = filters[name];
    return `${filter.name}(${value}${filter.unit})`;
  }).join(' ');

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6}>
        <img src={url} alt='Original image without filters' />
      </Grid>
      <Grid item xs={6} sm={6}>
        <img src={url} alt='Image with applied filters' style={{ filter: filterCSS }} />
      </Grid>
    </Grid>
  );
};

export default Images;
