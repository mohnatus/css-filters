import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from '@material-ui/core/Link';
import InfoIcon from '@material-ui/icons/Info';
import { filters } from '../../data/filters';

FiltersListButton.propTypes = {
  filterName: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const useStyles = makeStyles({
  info: {
    padding: 0
  }
})

function FiltersListButton({ filterName, disabled, onClick }) {
  const classes = useStyles();
  const { name, info } = filters[filterName];

  function clickHandler() {
    onClick(filterName);
  }

  return (
    <>
      <ButtonGroup variant='contained'>
        <Button disabled={disabled} color='primary' onClick={clickHandler}>
          {name}
        </Button>
        <Button
          component={Link}
          href={info.link}
          target='_blank'
          rel='noopener noreferrer nofollow'
          aria-label='mdn link'
          color='secondary'
          className={classes.info}
        >
          <InfoIcon color="primary" />
        </Button>
      </ButtonGroup>
    </>
  );
}

export default FiltersListButton;
