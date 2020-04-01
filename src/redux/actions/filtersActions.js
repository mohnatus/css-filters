export const APPLY_FILTER = 'apply.filter';
export const CHANGE_FILTER_VALUE = 'change.filter.value';
export const REMOVE_FILTER = 'remove.filter';
export const DEACTIVATE_FILTER = 'deactivate.filter';
export const ACTIVATE_FILTER = 'activate.filter';

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

export function deactivateFilter(filterName) {
  return {
    type: DEACTIVATE_FILTER,
    payload: filterName
  }
}

export function activateFilter(filterName) {
  return {
    type: ACTIVATE_FILTER,
    payload: filterName
  }
}
