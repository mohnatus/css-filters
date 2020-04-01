import { APPLY_FILTER, CHANGE_FILTER_VALUE, REMOVE_FILTER } from './actions';
import { filters } from '../data/filters';

const initialState = {
  applied: [
    {
      name: 'opacity',
      value: 100
    }
  ],
};

export default function(state = initialState, action) {
  let applied;

  switch (action.type) {
    case APPLY_FILTER:
      const appliedFilter = filters[action.payload];
      console.log(appliedFilter)
      if (!appliedFilter) return state;

      applied = state.applied.filter((filter) => {
        return filter.name !== action.payload;
      });
      applied.push({
        name: action.payload,
        value: appliedFilter.defaultValue,
      });

      return {
        ...state,
        applied,
      };

    case CHANGE_FILTER_VALUE:
      const { filterName, newValue } = action.payload;
      applied = state.applied.map((filter) => {
        if (filter.name === filterName) {
          return {
            ...filter,
            value: newValue,
          };
        }
        return filter;
      });
      return {
        ...state,
        applied,
      };

    case REMOVE_FILTER:
      applied = state.applied.filter((filter) => {
        return filter.name !== action.payload;
      });
      return {
        ...state,
        applied,
      };

    default:
      return state;
  }
}
