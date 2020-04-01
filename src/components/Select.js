import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Select({ images }) {
  return (
    <div>
      <Container fixed>
        <Typography variant="h2">Выберите изображение</Typography>

        <Grid container spacing={3}>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Select;
