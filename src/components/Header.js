import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Link from '@material-ui/core/Link';

import Drawer from './Drawer';

import { site } from '../data/links';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position='sticky'>
          <Toolbar>
            <Drawer />
            <Typography variant='h6' style={{ flexGrow: 1 }}>
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
    </>
  );
};

export default Header;
