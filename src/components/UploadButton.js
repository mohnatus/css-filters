import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {useDropzone} from 'react-dropzone'

function UploadButton({ onLoad, ...containerProps }) {
  const onDrop = useCallback(files => {
    if (!files.length) {
      return;
    }
    const file = files[0];
    onLoad(file);
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <label {...containerProps} {...getRootProps()}>
      <input {...getInputProps()} />
      <IconButton color={isDragActive ? 'primary' : 'default' } aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
  );
}

export default UploadButton;
