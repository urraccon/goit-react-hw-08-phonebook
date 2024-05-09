import { Divider, IconButton, Typography } from '@mui/material';
import { Container, Content } from './NavBar.styles';
import { Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'components/redux/auth/operations';
import { selectUsername } from 'components/redux/auth/selectors';

const NavBar = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <Typography variant="button">{username}</Typography>
        <Divider orientation="vertical" />
        <IconButton
          sx={{
            padding: 0,
          }}
          onClick={() => dispatch(userLogout())}
        >
          <Logout
            sx={{
              fill: 'white',
            }}
          />
        </IconButton>
      </Content>
    </Container>
  );
};

export default NavBar;
