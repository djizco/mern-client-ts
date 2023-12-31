import type { User } from '_types/users';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function login(user: User) {
  return {
    type: LOGIN_USER,
    payload: {
      user,
    },
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}

export function updateUser(user: User) {
  return {
    type: UPDATE_USER,
    payload: {
      user,
    },
  };
}
