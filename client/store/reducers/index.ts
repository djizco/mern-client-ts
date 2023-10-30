import { combineReducers, Reducer } from 'redux';

import todos from './todos';
import user from './user';

const createRootReducer = (routerReducer: Reducer) => combineReducers({
  router: routerReducer,
  user,
  todos,
});

export default createRootReducer;
