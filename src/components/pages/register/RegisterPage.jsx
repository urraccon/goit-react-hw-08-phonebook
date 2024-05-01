import { Typography } from '@mui/material';
import { Container, Content, Header } from './RegisterPage.styles';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Typography variant="h4">All your contacts in one place</Typography>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            You need to set an email address and a password to create an account
          </Typography>
          <RegisterForm />
        </Header>
      </Content>
    </Container>
  );
};

export default RegisterPage;
