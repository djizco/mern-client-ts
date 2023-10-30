import request from 'superagent';

import { User } from '_client/types/users';

import { handleError, handleSuccess } from './utils';

export const getUser = () =>
  request.get('/api/user')
    .then(handleSuccess)
    .catch(handleError);

export const putUser = (userInfo: User) =>
  request.put('/api/user')
    .send(userInfo)
    .then(handleSuccess)
    .catch(handleError);

export const putUserPassword = (passwordInfo: {
  oldPassword: string;
  newPassword: string;
}) =>
  request.put('/api/user/password')
    .send(passwordInfo)
    .then(handleSuccess)
    .catch(handleError);
