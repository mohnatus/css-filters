import React from 'react';
import { useTheme } from '@material-ui/core';

function Preview({ url, size, selected, onClick }) {
  const theme = useTheme();

  function clickHandler() {
    onClick(url);
  }
  return (
    <div onClick={clickHandler} style={{cursor: 'pointer'}}>
      <img src={url} alt='' height={size} />
      {selected ? (
        <div style={{ height: 3, background: theme.palette.primary.main }} />
      ) : null}
    </div>
  );
}

export default Preview;
