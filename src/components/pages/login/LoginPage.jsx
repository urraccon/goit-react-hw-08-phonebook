import { Typography } from '@mui/material';
import { Container, Content, Header } from './LoginPage.styles';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Typography variant="h4">Welcome to your phonebook</Typography>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            You need to log in to see your contacts
          </Typography>
        </Header>
        <LoginForm />
      </Content>
    </Container>
  );
};

export default LoginPage;
