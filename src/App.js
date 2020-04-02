import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import lime from '@material-ui/core/colors/lime';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './components/Header';
import Playground from './containers/Playground';

import { filters } from './data/filters';

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
      </div>
    </ThemeProvider>
  );
}

export default App;
