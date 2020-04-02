import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { menu } from '../data/links';

const useStyles = makeStyles(({ palette }) => ({
  list: {
    width: 250,
  },
  item: {
    color: palette.text.primary,
    '&:hover': {
      color: palette.primary.main,
    },
  },
  icon: {
    color: 'inherit',
  },
}));

function Drawer() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
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
        <div
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List className={classes.list}>
            {menu.map((item, index) => {
              const { url, title, subtitle, icon } = item;
              return (
                <ListItem
                  key={index}
                  component={'a'}
                  href={url}
                  className={classes.item}
                >
                  <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
                  <ListItemText primary={title} secondary={subtitle} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default Drawer;
