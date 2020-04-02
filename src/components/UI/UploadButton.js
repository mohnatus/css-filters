import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { useDropzone } from 'react-dropzone';

function UploadButton({ onLoad, ...containerProps }) {
  const onDrop = useCallback((files) => {
    if (!files.length) {
      return;
    }
    const file = files[0];
    onLoad(file);
  }, [onLoad]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...containerProps} {...getRootProps()}>
      <input {...getInputProps()} />
      <IconButton
        color={isDragActive ? 'primary' : 'default'}
        aria-label='upload picture'
        component='span'
      >
        <PhotoCamera />
      </IconButton>
    </div>
  );
}

export default UploadButton;
