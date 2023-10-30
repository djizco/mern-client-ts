import update from 'immutability-helper';
import { AnyAction } from 'redux';

import { LOGIN_USER, LOGOUT_USER, UPDATE_USER } from '_store/actions/user';

import type { User } from '_types/users';

export default function user(state: User | {} = {}, action: AnyAction) {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.user;
    case LOGOUT_USER:
      return {};
    case UPDATE_USER:
      return update(state, { $merge: action.payload.user });
    default:
      return state;
  }
}
