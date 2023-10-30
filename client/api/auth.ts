import request from 'superagent';

import { handleError, handleSuccess } from './utils';

import type { User } from '_types/users';

export const postRegister = (user: User) =>
  request.post('/api/auth/register')
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogin = (user: User) =>
  request.post('/api/auth/login')
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogout = () =>
  request.post('/api/auth/logout')
    .then(handleSuccess)
    .catch(handleError);
