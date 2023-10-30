import React, { useEffect } from 'react';

import R from 'ramda';
import { push } from 'redux-first-history';

import Container from 'react-bulma-companion/lib/Container';
import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';

import { useAppDispatch, useAppSelector } from '_store/hooks';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  return (
    <Section>
      <Container>
        <Title size="1" textAlign="center">
          Home Page
        </Title>
      </Container>
    </Section>
  );
}
