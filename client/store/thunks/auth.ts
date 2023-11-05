import { Store as RNC } from 'react-notifications-component';
import { push } from 'redux-first-history';

import { postLogin, postLogout, postRegister } from '_client/api/auth';

import { dispatchError } from '_api/utils';

import { login, logout } from '_store/actions/user';
import { TypedDispatch } from '_store/index';

import type { User } from '_types/users';

export const attemptLogin = (user: User) => (dispatch: TypedDispatch) =>
  postLogin(user)
    .then(data => {
      dispatch(login(data.user));

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      dispatch(push('/home'));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptRegister = (newUser: User) => (dispatch: TypedDispatch) =>
  postRegister(newUser)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      return dispatch(attemptLogin(newUser));
    })
    .then(() => dispatch(push('/settings')))
    .catch(dispatchError(dispatch));

export const attemptLogout = () => (dispatch: TypedDispatch) =>
  postLogout()
    .then(data => {
      dispatch(logout());

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      dispatch(push('/login'));
      return data;
    })
    .catch(dispatchError(dispatch));
