import { Button, TextField, Typography } from '@mui/material';
import {
  ButtonContainer,
  Fields,
  Form,
  StyledNavLink,
} from './RegisterForm.styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Validation from 'components/common/services/validation/Validation';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [repeatPassErr, setRepeatPassErr] = useState(null);

  function registerSubmit(evt) {
    console.dir(evt.target);
    evt.preventDefault();
    const emailValue = evt.target[0].value;
    const passwordValue = evt.target[2].value;
    const repeatPassValue = evt.target[4].value;
    const checkEmail = Validation.checkEmail(emailValue);
    const checkPassword = Validation.checkPassword(passwordValue, 'register');
    const checkRepeatPass = Validation.checkRepeatPass(
      passwordValue,
      repeatPassValue
    );
    setEmailErr(checkEmail);
    setPasswordErr(checkPassword);
    setRepeatPassErr(checkRepeatPass);
  }

  return (
    <Form onSubmit={registerSubmit}>
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
          sx={{
            minWidth: '28ch',
          }}
          onChange={evt => setEmail(evt.target.value)}
          value={email}
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
          onChange={evt => setPassword(evt.target.value)}
          value={password}
        />
        <TextField
          error={repeatPassErr ? true : false}
          required
          type="password"
          id="repeat-password"
          label="Repeat password"
          helperText={
            repeatPassErr ? repeatPassErr : 'Please reenter the password'
          }
          size="small"
          color="warning"
          onChange={evt => setRepeatPassword(evt.target.value)}
          value={repeatPassword}
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
          Create account
        </Button>
        <Typography
          variant="overline"
          ml={2}
          sx={{
            fontSize: 8,
            textAlign: 'left',
          }}
        >
          If you have an account
          <StyledNavLink>
            <NavLink
              to="/login"
              style={{
                all: 'unset',
              }}
            >
              Log in
            </NavLink>
          </StyledNavLink>
        </Typography>
      </ButtonContainer>
    </Form>
  );
};

export default RegisterForm;
