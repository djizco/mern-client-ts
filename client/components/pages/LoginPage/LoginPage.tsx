import React, { useEffect } from 'react';

import R from 'ramda';
import { push } from 'redux-first-history';

import Section from 'react-bulma-companion/lib/Section';

import { useAppDispatch, useAppSelector } from '_store/hooks';

import LoginPanel from './LoginPanel';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, [dispatch, user]);

  return (
    <Section display="flex" justifyContent="center">
      <LoginPanel />
    </Section>
  );
}
