import {
  APPLY_FILTER,
  CHANGE_FILTER_VALUE,
  REMOVE_FILTER,
  TOGGLE_ACTIVATE_FILTER,
  SORT_FILTERS,
} from '../actions/filtersActions';
import { filters } from '../../data/filters';

const initialState = [
  {
    name: 'invert',
    value: 100,
    active: true
  }
];

export function filtersReducer(state = initialState, action) {
  let applied;

  switch (action.type) {
    case APPLY_FILTER:
      const appliedFilter = filters[action.payload];
      if (!appliedFilter) return state;

      applied = state.filter((filter) => {
        return filter.name !== action.payload;
      });
      applied.push({
        name: action.payload,
        value: appliedFilter.defaultValue,
        active: true,
      });

      return applied;

    case CHANGE_FILTER_VALUE:
      const { filterName, newValue } = action.payload;
      return state.map((filter) => {
        if (filter.name === filterName) {
          return {
            ...filter,
            value: newValue,
          };
        }
        return filter;
      });

    case REMOVE_FILTER:
      return state.filter((filter) => {
        return filter.name !== action.payload;
      });

    case TOGGLE_ACTIVATE_FILTER:
      return state.map((filter) => {
        if (filter.name === action.payload) {
          return {
            ...filter,
            active: !filter.active,
          };
        }
        return filter;
      });

    case SORT_FILTERS:
      return action.payload;

    default:
      return state;
  }
}
