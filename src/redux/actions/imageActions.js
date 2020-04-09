import * as types from './imageActionsTypes';

export function changeImage(url) {
  return {
    type: types.CHANGE_IMAGE,
    payload: url,
  };
}

export function loadImage(url) {
  return {
    type: types.LOAD_IMAGE,
    payload: url,
  };
}
