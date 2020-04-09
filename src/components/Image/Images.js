import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ breakpoints }) => ({
  img: {
    maxHeight: 300,
    maxWidth: 450,
    width: '100%',
  },
  wrapper: {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      '&:first-child': {
        textAlign: 'right',
      },
      '&:last-child': {
        textAlign: 'left',
      },
    },
  },
}));

Images.propTypes = {
  css: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

function Images({ css, url }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid className={classes.wrapper} item xs={12} sm={6}>
        {/* eslint-disable-next-line */}
        <img
          className={classes.img}
          src={url}
          alt='Original image without filters'
        />
      </Grid>
      <Grid className={classes.wrapper} item xs={12} sm={6}>
        {/* eslint-disable-next-line */}
        <img
          className={classes.img}
          src={url}
          alt='Image with applied filters'
          style={{ filter: css }}
        />
      </Grid>
    </Grid>
  );
}

export default Images;
