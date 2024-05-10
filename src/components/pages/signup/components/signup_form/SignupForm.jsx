import { Button, Link, TextField, Typography } from '@mui/material';
import { ButtonContainer, Fields, Form } from './SignupForm.styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Validation from 'components/common/services/Validation';
import { useDispatch } from 'react-redux';
import { userSignup } from 'components/redux/auth/operations';
import { useMediaQuery } from 'react-responsive';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const dispatch = useDispatch();
  const mobile = useMediaQuery({
    maxWidth: 767,
  });

  function handleSignupSubmit(evt) {
    evt.preventDefault();
    const nameValue = evt.target[0].value;
    const emailValue = evt.target[2].value;
    const passwordValue = evt.target[4].value;
    const isNameInvalid = Validation.checkName(nameValue);
    const isEmailInvalid = Validation.checkEmail(emailValue);
    const isPasswordInvalid = Validation.checkPassword(passwordValue, 'signup');
    setNameErr(isNameInvalid);
    setEmailErr(isEmailInvalid);
    setPasswordErr(isPasswordInvalid);
    if (!isNameInvalid && !isEmailInvalid && !isPasswordInvalid) {
      const signupData = {
        name,
        email,
        password,
      };
      dispatch(userSignup(signupData));
    }
  }

  return (
    <Form onSubmit={handleSignupSubmit}>
      <Fields>
        <TextField
          error={nameErr ? true : false}
          type="text"
          id="name"
          label="Name"
          helperText={nameErr ? nameErr : 'Please enter the name'}
          size="small"
          color="warning"
          onChange={evt => setName(evt.target.value)}
          value={name}
          sx={{
            minWidth: `${!mobile && '28ch'}`,
          }}
        />
        <TextField
          error={emailErr ? true : false}
          type="text"
          id="email"
          label="Email address"
          helperText={emailErr ? emailErr : 'Please enter the email address'}
          size="small"
          color="warning"
          onChange={evt => setEmail(evt.target.value)}
          value={email}
        />
        <TextField
          error={passwordErr ? true : false}
          type="password"
          id="password"
          label="Password"
          helperText={passwordErr ? passwordErr : 'Please enter the password'}
          size="small"
          color="warning"
          onChange={evt => setPassword(evt.target.value)}
          value={password}
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
          <Link
            underline="hover"
            component={NavLink}
            to="/login"
            ml={0.4}
            sx={{
              fontWeight: 700,
              color: '#ed6c02',
            }}
          >
            Log in
          </Link>
        </Typography>
      </ButtonContainer>
    </Form>
  );
};

export default SignupForm;
