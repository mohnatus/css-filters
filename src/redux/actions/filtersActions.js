import * as types from './filtersActionsTypes';

export function changeFilterValue(filterName, newValue) {
  return {
    type: types.CHANGE_FILTER_VALUE,
    payload: {
      filterName,
      newValue,
    },
  };
}

export function sortFilters(filters) {
  return {
    type: types.SORT_FILTERS,
    payload: filters,
  };
}
