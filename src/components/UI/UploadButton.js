import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: 55,
    '&:hover': {
      color: palette.primary.main,
    },
    '&.active': {
      color: palette.primary.main,
      background: palette.primary[100],
    },
  },
}));

UploadButton.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

function UploadButton({ onLoad, ...containerProps }) {
  const classes = useStyles();
  const onDrop = useCallback(
    (files) => {
      if (!files.length) {
        return;
      }
      const file = files[0];
      onLoad(file);
    },
    [onLoad],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...containerProps}
      {...getRootProps()}
      className={`${classes.root} ${isDragActive ? 'active' : ''}`}
    >
      <input {...getInputProps()} />
      <IconButton color='inherit' aria-label='upload picture' component='span'>
        <PhotoCamera />
      </IconButton>
    </div>
  );
}

export default UploadButton;
