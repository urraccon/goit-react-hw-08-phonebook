import { Section } from 'components/common/components/section/Section';
import {
  alertMessage,
  selectStatus,
} from 'components/redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
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
import Alerts from 'components/common/components/alerts/Alerts';
import { clearStatus } from 'components/redux/contacts/slices/contactsSlice';

const ContactsPage = () => {
  const status = useSelector(selectStatus);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const alert = useSelector(alertMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      setTimeout(() => {
        dispatch(clearStatus());
      }, 2000);
    }
  }, [status, dispatch]);

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
      <Container>
        <Paper elevation={6} sx={PaperStyling}>
          <Content>
            <Section
              name="Create contact"
              descr="Do you have a new contact? Add it"
            >
              <ContactForm />
            </Section>
            <Divider variant="fullwidth" orientation="vertical" />
            <Section
              name="Contacts"
              descr="Looking for a contact? Use the search bar"
            >
              <Contacts>
                <Filter />
                <ContactList />
              </Contacts>
            </Section>
          </Content>
        </Paper>
      </Container>
    </>
  );
};

export default ContactsPage;
