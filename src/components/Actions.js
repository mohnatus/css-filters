import React from 'react';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core';

function Actions(props) {
  const theme = useTheme();
  return (
    <div style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}>
      <Button variant='contained' color='secondary' fullWidth>
        Изменить изображение
      </Button>
    </div>
  );
}

export default Actions;
