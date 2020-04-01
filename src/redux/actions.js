export const APPLY_FILTER = 'apply.filter';
export const CHANGE_FILTER_VALUE = 'change.filter.value';
export const REMOVE_FILTER = 'remove.filter';

export function applyFilter(filterName) {
  return {
    type: APPLY_FILTER,
    payload: filterName
  }
}

export function changeFilterValue(filterName, newValue) {
  return {
    type: CHANGE_FILTER_VALUE,
    payload: {
      filterName, newValue
    }
  }
}

export function removeFilter(filterName) {
  return {
    type: REMOVE_FILTER,
    payload: filterName
  }
}
