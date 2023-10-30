import React, { useEffect } from 'react';

import R from 'ramda';
import { Route, Routes } from 'react-router-dom';
import { push } from 'redux-first-history';

import Column from 'react-bulma-companion/lib/Column';
import Columns from 'react-bulma-companion/lib/Columns';
import Container from 'react-bulma-companion/lib/Container';
import Section from 'react-bulma-companion/lib/Section';

import { useAppDispatch, useAppSelector } from '_store/hooks';

import AccountSettings from './AccountSettings';
import ProfileSettings from './ProfileSettings';
import SettingsMenu from './SettingsMenu';

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    }
  }, [dispatch, user]);

  return (
    <div className="settings-page page">
      <Section>
        <Container>
          <Columns>
            <Column size="3">
              <SettingsMenu />
            </Column>
            <Column size="9">
              <Routes>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="account" element={<AccountSettings />} />
                <Route path="*" element={<ProfileSettings />} />
              </Routes>
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}
