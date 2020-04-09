import startImage from '../../images/3.jpg';
import * as types from '../actions/imageActionsTypes';

const initialState = {
  custom: null,
  current: startImage,
};

export function imageReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_IMAGE:
      return {
        ...state,
        current: action.payload,
      };
    case types.LOAD_IMAGE:
      return {
        ...state,
        custom: action.payload,
        current: action.payload,
      };
    default:
      return state;
  }
}
