import React, { useEffect, useState } from 'react';

import R from 'ramda';
import { Link } from 'react-router-dom';

import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

import Block from 'react-bulma-companion/lib/Block';
import Box from 'react-bulma-companion/lib/Box';
import Button from 'react-bulma-companion/lib/Button';
import Checkbox from 'react-bulma-companion/lib/Checkbox';
import Title from 'react-bulma-companion/lib/Title';

import FormInput from '_components/elements/FormInput';

import { useAppDispatch } from '_store/hooks';
import { attemptLogin } from '_store/thunks/auth';

import useKeyPress from '_hooks/useKeyPress';

import styles from './styles.module.css';

export default function LoginPanel() {
  const dispatch = useAppDispatch();

  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const usernameFromStorage = localStorage.getItem('username');
    if (usernameFromStorage) {
      setRemember(true);
      setUsername(usernameFromStorage);
    }
  }, []);

  const login = () => {
    const userCredentials = { username, password };

    if (remember) {
      localStorage.setItem('username', username);
    }

    setLoading(true);
    dispatch(attemptLogin(userCredentials))
      .catch(R.identity)
      .finally(() => setLoading(false));
  };

  useKeyPress('Enter', login);

  const rememberMe = () => {
    localStorage.removeItem('username');
    setRemember(!remember);
  };

  return (
    <Box className={styles.root}>
      <Title size="3" textAlign="center">
        Login
      </Title>
      <hr className="separator" />
      <Block>
        Not Registered Yet?&nbsp;
        <Link to="/register">
          Create an account.
        </Link>
      </Block>
      <Block>
        <FormInput
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          value={username}
          leftIcon={faUser}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          leftIcon={faLock}
          type="password"
        />
      </Block>
      <Block>
        <Link to="/recovery">
          Forgot your password?
        </Link>
      </Block>
      <hr className="separator" />
      <div className={styles.foot}>
        <Checkbox display="flex" alignItems="center">
          <input type="checkbox" onChange={rememberMe} checked={remember} />
          <span>&nbsp; Remember me</span>
        </Checkbox>
        <Button color="success" onClick={login} disabled={loading}>
          Login
        </Button>
      </div>
    </Box>
  );
}
