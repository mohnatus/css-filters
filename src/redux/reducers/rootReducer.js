import { combineReducers } from 'redux';
import { filtersReducer } from './filtersReducer';
import { imageReducer } from './imageReducer';

export default combineReducers({
  filters: filtersReducer,
  image: imageReducer,
});
