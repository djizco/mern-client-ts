import request from 'superagent';

import { handleError, handleSuccess } from './utils';

export const postCheckUsername = (username: string) =>
  request.post('/api/users/checkusername')
    .send({ username })
    .then(handleSuccess)
    .catch(handleError);
