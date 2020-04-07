import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Preview from './Preview';
import UploadButton from '../UI/UploadButton';
import list from './list';
import { getDataUrl } from '../../utils/file';
import CircularProgress from '@material-ui/core/CircularProgress';

Select.propTypes = {
  current: PropTypes.string.isRequired,
  cusrom: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
};

function Select({ current, custom, onChange, onLoad }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function loadHandler(file) {
    setLoading(true);
    getDataUrl(file).then((url) => {
      setLoading(false);
      onLoad(url);
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          onClick={() => setOpen(!open)}
        >
          {open ? 'Hide' : 'Change image'}
        </Button>
      </Grid>

      {open ? (
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {list.map((img, index) => {
              return (
                <Grid item xs='auto' key={index}>
                  <Preview
                    url={img}
                    selected={img === current}
                    onClick={onChange}
                    size={55}
                  />
                </Grid>
              );
            })}
            {custom ? (
              <Grid item xs='auto'>
                <Preview
                  url={custom}
                  selected={custom === current}
                  size={55}
                  onClick={onChange}
                />
              </Grid>
            ) : null}
            <Grid item xs='auto'>
              {loading ? (
                <CircularProgress />
              ) : (
                <UploadButton onLoad={loadHandler} />
              )}
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default Select;
