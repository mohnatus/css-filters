import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(logger));
}
