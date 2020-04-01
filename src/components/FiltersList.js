import React from 'react';
import { styled, useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { filters } from '../data/filters';



function FiltersList({ applied, onApply }) {
  const theme = useTheme();

  const ButtonContainer = styled('div')({
    marginBottom: theme.spacing(1),
  });

  const list = Object.keys(filters).map(filterName => {
    return {
      name: filters[filterName].name,
      disabled: !!applied.find(filter => filter.name === filterName)
    }
  })

  return (
    <div>
      { list.map(({ name, disabled }) => {
        return (
          <ButtonContainer key={name}>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              disabled={disabled}
              onClick={() => onApply(name)}
              >
              {name}
            </Button>
          </ButtonContainer>
        )
      }) }
    </div>
  )
}

export default FiltersList;
