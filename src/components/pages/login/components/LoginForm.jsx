import { Button, TextField, Typography } from '@mui/material';
import {
  ButtonContainer,
  Form,
  Fields,
  StyledNavLink,
} from './LoginForm.styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Validation from 'components/common/services/validation/Validation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  function loginSubmit(evt) {
    console.dir(evt.target);
    evt.preventDefault();
    const emailValue = evt.target[0].value;
    const passwordValue = evt.target[2].value;
    const checkEmail = Validation.checkEmail(emailValue);
    const checkPassword = Validation.checkPassword(passwordValue, 'login');
    setEmailErr(checkEmail);
    setPasswordErr(checkPassword);
  }

  return (
    <Form onSubmit={loginSubmit}>
      <Fields>
        <TextField
          error={emailErr ? true : false}
          required
          type="text"
          id="email"
          label="Email address"
          helperText={emailErr ? emailErr : 'Please enter the email address'}
          size="small"
          color="warning"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          sx={{
            minWidth: '28ch',
          }}
        />
        <TextField
          error={passwordErr ? true : false}
          required
          type="password"
          id="password"
          label="Password"
          helperText={passwordErr ? passwordErr : 'Please enter the password'}
          size="small"
          color="warning"
          value={password}
          onChange={evt => setPassword(evt.target.value)}
        />
      </Fields>
      <ButtonContainer>
        <Button
          type="submit"
          variant="outlined"
          size="small"
          color="warning"
          sx={{
            fontWeight: 900,
          }}
        >
          Log in
        </Button>
        <Typography
          variant="overline"
          ml={2}
          sx={{
            fontSize: 8,
          }}
        >
          If you don't have an account
          <StyledNavLink>
            <NavLink
              to="/register"
              style={{
                all: 'unset',
              }}
            >
              Create account
            </NavLink>
          </StyledNavLink>
        </Typography>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
