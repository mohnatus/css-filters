import * as types from '../actions/filtersActionsTypes';
import { filters } from '../../data/filters';

const names = Object.keys(filters);
const values = names.reduce((acc, filterName) => {
  return {
    ...acc,
    [filterName]: filters[filterName].defaultValue,
  };
}, {});
values.invert = 100;

const initialState = {
  order: names,
  values,
};

export function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FILTER_VALUE:
      const { filterName, newValue } = action.payload;
      return {
        ...state,
        values: {
          ...state.values,
          [filterName]: newValue,
        },
      };

    case types.SORT_FILTERS:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
}
