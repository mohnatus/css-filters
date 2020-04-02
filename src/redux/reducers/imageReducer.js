import startImage from '../../images/3.jpg';
import { CHANGE_IMAGE, LOAD_IMAGE } from '../actions/imageActions';

const initialState = {
  custom: null,
  current: startImage,
};

export function imageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGE:
      return {
        ...state,
        current: action.payload,
      };
    case LOAD_IMAGE:
      return {
        ...state,
        custom: action.payload,
        current: action.payload,
      };
    default:
      return state;
  }
}
