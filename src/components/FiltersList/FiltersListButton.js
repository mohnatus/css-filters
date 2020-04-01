import React from 'react';

import { useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import InfoIcon from '@material-ui/icons/Info';

function FiltersListButton({ name, text, disabled, onClick, view = 'block' }) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function clickHandler() {
    onClick(name);
  }

  function showInfo(event) {
    setAnchorEl(event.currentTarget);
  }

  function hideInfo() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? `filter-${name}-description-${view}` : undefined;

  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: view === 'block' ? 'right' : 'center',
  };

  const transformOrigin = {
    vertical: 'top',
    horizontal: view === 'block' ? 'right' : 'center',
  };

  return (
    <>
      <ButtonGroup variant='contained' color='primary'>
        <Button disabled={disabled} onClick={clickHandler}>
          {name}
        </Button>
        <Button aria-describedby={id} onClick={showInfo}>
          <InfoIcon />
        </Button>
      </ButtonGroup>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={hideInfo}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <Typography variant="body2" component="div" style={{ padding: theme.spacing(2) }}>{text}</Typography>
      </Popover>
    </>
  );
}

export default FiltersListButton;
