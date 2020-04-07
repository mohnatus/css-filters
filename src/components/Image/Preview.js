import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, transitions }) => ({
  preview: {
    cursor: 'pointer',
    '& img': {
      transitionProperty: 'transform',
      transitionDuration: transitions.duration.shortest,
      transitionTimingFunction: transitions.easing.easeInOut
    },
    '&:hover img': {
      transform: 'scale(1.1)',
    },
  },
  border: {
    height: 3,
    backgroundColor: palette.primary.main,
  },
}));

Preview.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Preview({ url, size = 70, selected, onClick }) {
  const classes = useStyles();

  const clickHandler = useCallback(() => {
    onClick(url);
  }, [onClick, url])

  return (
    <div onClick={clickHandler} className={classes.preview}>
      <img src={url} alt='' height={size} />
      {selected ? <div className={classes.border} /> : null}
    </div>
  );
}

export default Preview;
