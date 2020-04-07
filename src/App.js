import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lime from '@material-ui/core/colors/lime';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './components/Header';
import Playground from './containers/Playground';

import { filters } from './data/filters';
import { Container } from '@material-ui/core';
import AdSense from 'react-adsense-ad';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: lime,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <CssBaseline />
        <Header />

        <Playground filters={filters} />
        <Container maxWidth='lg'>
          <div style={{ overflow: 'hidden' }}>
            <AdSense.Google
              client='ca-pub-3389773486006292'
              slot='3538683662'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
            />
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
