import React, { useState } from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Box from 'react-bulma-companion/lib/Box';
import Button from 'react-bulma-companion/lib/Button';
import Control from 'react-bulma-companion/lib/Control';
import Field from 'react-bulma-companion/lib/Field';
import Help from 'react-bulma-companion/lib/Help';
import Icon from 'react-bulma-companion/lib/Icon';
import Input from 'react-bulma-companion/lib/Input';
import Label from 'react-bulma-companion/lib/Label';
import Title from 'react-bulma-companion/lib/Title';

import { useAppDispatch, useAppSelector } from '_store/hooks';
import { attemptUpdateUser } from '_store/thunks/user';

export default function ChangeUsername() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);

  const [usernameCase, setUsernameCase] = useState(user.usernameCase);

  const updateUsernameCase = (e: React.ChangeEvent<HTMLInputElement>) => setUsernameCase(e.target.value);

  const isCurrent = user.usernameCase === usernameCase;
  const isValid = !isCurrent && usernameCase.toLowerCase() === user.username;

  const saveUsernameCase = () => {
    if (usernameCase.toLowerCase() === user.username) {
      const updatedUser = { usernameCase };

      dispatch(attemptUpdateUser(updatedUser))
        .catch(() => setUsernameCase(user.usernameCase));
    }
  };

  const helpMessage = isValid ? 'Username case valid.' : `Username case must match: ${user.username}`;

  return (
    <Box className="change-username">
      <Title size="3">
        Username
      </Title>
      <hr className="separator" />
      <Field>
        <Label htmlFor="username">
          Current Username
        </Label>
        <Control className="control">
          {user.usernameCase}
        </Control>
      </Field>
      <Field className="has-help">
        <Label htmlFor="username-case">
          Username Case
        </Label>
        <Control iconsRight>
          <Input
            id="username-case"
            color={isValid ? 'success' : !isCurrent ? 'danger' : undefined}
            placeholder="Username Case"
            value={usernameCase}
            onChange={updateUsernameCase}
          />
          {!isCurrent && (
            <Icon
              size="small"
              align="right"
              color={isValid ? 'success' : 'danger'}
            >
              <FontAwesomeIcon
                icon={isValid ? faCheck : faTriangleExclamation}
              />
            </Icon>
          )}
        </Control>
        {!isCurrent && (
          <Help color={isValid ? 'success' : 'danger'}>
            {helpMessage}
          </Help>
        )}
      </Field>
      <hr className="separator" />
      <Button
        color="success"
        disabled={!isValid}
        onClick={saveUsernameCase}
      >
        Save
      </Button>
    </Box>
  );
}
