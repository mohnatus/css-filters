import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Drawer from './Drawer';
import { site } from '../data/links';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar position='sticky'>
        <Toolbar>
          <Drawer />
          <Typography variant='h6' className={classes.title}>
            CSS Filters
          </Typography>
          <Typography variant='h6'>
            <Link href={site.url} color='inherit'>
              {site.title}
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
