import { snakeToCamelCase } from 'json-style-converter/es5';
import { Store as RNC } from 'react-notifications-component';

import { getUser, putUser, putUserPassword } from '_api/user';
import { dispatchError } from '_api/utils';

import { updateUser } from '_store/actions/user';
import { TypedDispatch } from '_store/index';

import type { User } from '_types/users';

export const attemptGetUser = () => (dispatch: TypedDispatch) =>
  getUser()
    .then(data => {
      dispatch(updateUser(snakeToCamelCase(data.user)));
      return data.user;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdateUser = (updatedUser: User) => (dispatch: TypedDispatch) =>
  putUser(updatedUser)
    .then(data => {
      dispatch(updateUser(snakeToCamelCase(data.user)));

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        insert: 'bottom',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptUpdatePassword = (passwordInfo: {
  oldPassword: string;
  newPassword: string;
}) => (dispatch: TypedDispatch) =>
  putUserPassword(passwordInfo)
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

      return data;
    })
    .catch(dispatchError(dispatch));
