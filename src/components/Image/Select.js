import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import list from './list';
import Preview from './Preview';
import UploadButton from '../UI/UploadButton';
import { getDataUrl } from '../../utils/file';

function Select({ current, custom, onChange, onLoad }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function toggleHadler() {
    setOpen(!open);
  }

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
          onClick={toggleHadler}
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
              {loading ? 'Loading' : <UploadButton onLoad={loadHandler} />}
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default Select;
