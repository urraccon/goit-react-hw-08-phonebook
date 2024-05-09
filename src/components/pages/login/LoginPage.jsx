import { Paper, Typography } from '@mui/material';
import { Container, Content, Header, PaperStyling } from './LoginPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertMessage,
  selectOperation,
  selectStatus,
} from 'components/redux/auth/selectors';
import { Loader } from 'components/common/components/Loader';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alerts from 'components/common/components/Alerts';
import LoginForm from './components/login_form/LoginForm';
import { clearLastStatus } from 'components/redux/auth/authSlice';

const LoginPage = () => {
  const status = useSelector(selectStatus);
  const operation = useSelector(selectOperation);
  const alert = useSelector(alertMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'succeeded' && operation === 'login') {
      setTimeout(() => {
        navigate('/contacts');
        dispatch(clearLastStatus());
      }, 1000);
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
                Welcome back to your phonebook
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                Log in to see your contacts
              </Typography>
            </Header>
            <LoginForm />
          </Content>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
