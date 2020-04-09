import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/imageActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Images from '../components/Image/Images';
import Select from '../components/Image/Select';

const useStyles = makeStyles(({spacing}) => ({
  root: {
    marginBottom: spacing(3)
  }
}))

function Image({ css, current, custom, changeImage, loadImage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Images url={current} css={css} />
      </Grid>
      <Grid item xs={12}>
        <Select
          current={current}
          custom={custom}
          onChange={changeImage}
          onLoad={loadImage}
        />
      </Grid>
    </Grid>
    </div>
  );
}

const mapStateToProps = ({ image }) => {
  return {
    ...image,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: (url) => {
      dispatch(actions.changeImage(url));
    },
    loadImage: (url) => {
      dispatch(actions.loadImage(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
