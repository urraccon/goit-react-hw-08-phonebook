import { Button, Link, TextField, Typography } from '@mui/material';
import { ButtonContainer, Form, Fields } from './LoginForm.styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Validation from 'components/common/services/Validation';
import { useDispatch } from 'react-redux';
import { userLogin } from 'components/redux/auth/operations';
import { useMediaQuery } from 'react-responsive';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const dispatch = useDispatch();
  const mobile = useMediaQuery({
    maxWidth: 768,
  });

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    const emailValue = evt.target[0].value;
    const passwordValue = evt.target[2].value;
    const isEmailInvalid = Validation.checkEmail(emailValue);
    const isPasswordInvalid = Validation.checkPassword(passwordValue, 'login');
    setEmailErr(isEmailInvalid);
    setPasswordErr(isPasswordInvalid);
    if (!isEmailInvalid && !isPasswordInvalid) {
      const loginData = {
        email,
        password,
      };
      dispatch(userLogin(loginData));
    }
  }

  return (
    <Form onSubmit={handleLoginSubmit}>
      <Fields>
        <TextField
          error={emailErr ? true : false}
          type="text"
          id="email"
          label="Email address"
          helperText={emailErr ? emailErr : 'Please enter the email address'}
          size="small"
          color="warning"
          value={email}
          onChange={evt => setEmail(evt.target.value)}
          sx={{
            minWidth: `${!mobile && '28ch'}`,
          }}
        />
        <TextField
          error={passwordErr ? true : false}
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
          <Link
            underline="hover"
            component={NavLink}
            to="/signup"
            ml={0.4}
            sx={{
              color: '#ed6c02',
              fontWeight: 700,
            }}
          >
            Create account
          </Link>
        </Typography>
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
