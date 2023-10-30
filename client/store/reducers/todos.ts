import update from 'immutability-helper';
import R from 'ramda';
import { AnyAction } from 'redux';

import {
  ADD_TODO, REMOVE_TODO, SET_TODOS, TOGGLE_COMPLETE_TODO, UPDATE_TODO,
} from '_store/actions/todos';
import { LOGOUT_USER } from '_store/actions/user';

import type { Todo } from '_types/todos';

const initialTodo = {
  completed: false,
  id: 0,
  text: '',
  createdAt: Date.now(),
};

export function todo(state: Todo = initialTodo, action: AnyAction) {
  switch (action.type) {
    case ADD_TODO:
      return update(state, {
        id: { $set: action.payload.id },
        text: { $set: action.payload.text },
        createdAt: { $set: action.payload.createdAt },
      });
    case TOGGLE_COMPLETE_TODO:
      return update(state, {
        completed: { $apply: x => !x },
      });
    case UPDATE_TODO:
      return update(state, {
        text: { $set: action.payload.text },
        updatedAt: { $set: action.payload.updatedAt },
      });
    default:
      return state;
  }
}

export default function todos(state: Todo[] = [], action: AnyAction) {
  const index = R.findIndex(R.propEq(action.payload?.id, 'id'), state);

  switch (action.type) {
    case SET_TODOS:
      return update(state, { $set: action.payload.todos });
    case ADD_TODO:
      return update(state, { $push: [todo(undefined, action)] });
    case TOGGLE_COMPLETE_TODO:
      return update(state, { $splice: [[index, 1, todo(state[index], action)]] });
    case UPDATE_TODO:
      return update(state, { $splice: [[index, 1, todo(state[index], action)]] });
    case REMOVE_TODO:
      return update(state, { $splice: [[index, 1]] });
    case LOGOUT_USER:
      return [];
    default:
      return state;
  }
}
