import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position='sticky'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>

            <Typography variant='h6'>CSS Filters</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;
