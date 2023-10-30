import React from 'react';

import R from 'ramda';
import { Link, useLocation } from 'react-router-dom';

import Box from 'react-bulma-companion/lib/Box';
import Menu from 'react-bulma-companion/lib/Menu';

import { useAppDispatch } from '_store/hooks';
import { attemptLogout } from '_store/thunks/auth';

export default function SettingsMenu() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const logout = () =>
    dispatch(attemptLogout())
      .catch(R.identity);

  return (
    <Box>
      <Menu className="settings-menu">
        <Menu.Label>
          Personal
        </Menu.Label>
        <Menu.List>
          <Menu.ListItem>
            <Menu.Link
              to="/settings/profile"
              active={pathname.includes('profile') || pathname === '/settings' || pathname === '/settings/'}
              component={Link}
            >
              Profile
            </Menu.Link>
          </Menu.ListItem>
        </Menu.List>
        <Menu.Label>
          Settings
        </Menu.Label>
        <Menu.List>
          <Menu.ListItem>
            <Menu.Link
              to="/settings/account"
              active={pathname.includes('account')}
              component={Link}
            >
              Account
            </Menu.Link>
          </Menu.ListItem>
          <Menu.ListItem>
            <Menu.Link onClick={logout} onKeyPress={logout}>
              Logout
            </Menu.Link>
          </Menu.ListItem>
        </Menu.List>
      </Menu>
    </Box>
  );
}
