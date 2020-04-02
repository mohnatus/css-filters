export const CHANGE_IMAGE = 'change.image';
export const LOAD_IMAGE = 'load.image';

export function changeImage(url) {
  return {
    type: CHANGE_IMAGE,
    payload: url,
  };
}

export function loadImage(url) {
  return {
    type: LOAD_IMAGE,
    payload: url,
  };
}
