import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { site, menu } from '../data/links';

function Drawer(props) {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List style={{ width: 250 }}>


          </List>
        </div>


      </SwipeableDrawer>
    </>
  );
}

export default Drawer;
