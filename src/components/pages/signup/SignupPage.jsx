import { Paper, Typography } from '@mui/material';
import { Container, Content, Header, PaperStyling } from './SignupPage.styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alertMessage, selectStatus } from 'components/redux/auth/selectors';
import { Loader } from 'components/common/components/Loader';
import { clearStatus } from 'components/redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Alerts from 'components/common/components/alerts/Alerts';
import SignupForm from './components/signup_form/SignupForm';

const SignupPage = () => {
  const status = useSelector(selectStatus);
  const alert = useSelector(alertMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'succeeded') {
      setTimeout(() => {
        dispatch(clearStatus());
        navigate('/contacts');
      }, 1000);
    }
    if (status === 'failed') {
      setTimeout(() => {
        dispatch(clearStatus());
      }, 2000);
    }
  }, [status, dispatch, navigate]);

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
