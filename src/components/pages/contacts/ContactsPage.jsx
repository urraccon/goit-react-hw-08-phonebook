import {
  alertMessage,
  selectStatus,
} from 'components/redux/contacts/selectors';
import { useSelector } from 'react-redux';
import ContactForm from './components/contact_form/ContactForm';
import { Filter } from './components/Filter';
import { ContactList } from './components/contact_list/ContactList';
import { Loader } from 'components/common/components/Loader';
import {
  Contacts,
  Container,
  Content,
  PaperStyling,
} from './ContactsPage.styles';
import { useEffect } from 'react';
import { Divider, Paper } from '@mui/material';
import { selectIsLoggedIn } from 'components/redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import Alerts from 'components/common/components/Alerts';
import { Sections } from 'components/common/components/sections/Sections';
import NavBar from 'components/common/components/nav_bar/NavBar';

const ContactsPage = () => {
  const status = useSelector(selectStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const alert = useSelector(alertMessage);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {status === 'loading' && <Loader />}
      {status === 'succeeded' && <Alerts type="success" message={alert} />}
      {status === 'failed' && <Alerts type="error" message={alert} />}
      <NavBar />
      <Container>
        <Paper elevation={6} sx={PaperStyling}>
          <Content>
            <Sections
              name="Create contact"
              descr="Do you have a new contact? Add it"
            >
              <ContactForm />
            </Sections>
            <Divider variant="fullwidth" orientation="vertical" />
            <Sections
              name="Contacts"
              descr="Looking for a contact? Use the search bar"
            >
              <Contacts>
                <Filter />
                <ContactList />
              </Contacts>
            </Sections>
          </Content>
        </Paper>
      </Container>
    </>
  );
};

export default ContactsPage;