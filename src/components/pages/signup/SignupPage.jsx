import { Paper, Typography } from '@mui/material';
import { Container, Content, Header, PaperStyling } from './SignupPage.styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertMessage,
  selectOperation,
  selectStatus,
} from 'components/redux/auth/selectors';
import { Loader } from 'components/common/components/Loader';
import { useNavigate } from 'react-router-dom';
import Alerts from 'components/common/components/Alerts';
import SignupForm from './components/signup_form/SignupForm';
import { clearLastStatus } from 'components/redux/auth/authSlice';

const SignupPage = () => {
  const status = useSelector(selectStatus);
  const alert = useSelector(alertMessage);
  const operation = useSelector(selectOperation);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'succeeded' && operation === 'login') {
      setTimeout(() => {
        navigate('/contacts');
        dispatch(clearLastStatus());
      }, 1000);
    }
    if (operation === 'logout') {
      dispatch(clearLastStatus());
    }
  }, [status, operation, navigate, dispatch]);

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'succeeded' && <Alerts type="success" message={alert} />}
      {status === 'failed' && <Alerts type="error" message={alert} />}
      <Container>
        <Paper elevation={6} sx={PaperStyling}>
          <Content>
            <Header>
              <Typography variant="h4">
                The simplest app to manage your contacts
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                Set a name, an email address and a password to creat an account
              </Typography>
            </Header>
            <SignupForm />
          </Content>
        </Paper>
      </Container>
    </>
  );
};

export default SignupPage;
