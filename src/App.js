import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './components/Header';
import Playground from './containers/Playground';

import { filters } from './data/filters';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  }
});



console.log(theme)

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
