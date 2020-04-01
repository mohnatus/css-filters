import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './components/Header';
import Playground from './containers/Playground';

import { filters } from './data/filters';

function App() {
  return (
    <div className='app'>
      <CssBaseline />
      <Header />

      <Playground filters={filters} />
    </div>
  );
}

export default App;
