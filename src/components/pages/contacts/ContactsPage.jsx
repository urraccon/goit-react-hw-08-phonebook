import { Section } from 'components/common/components/section/Section';
import {
  selectErrAddContact,
  selectErrContacts,
  selectIsLoading,
} from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/contact_form/ContactForm';
import { Filter } from './components/filter/Filter';
import { ContactList } from './components/contact_list/ContactList';
import { Loader } from 'components/common/components/loader/Loader';
import { Contacts, Container, Content, Cover } from './ContactsPage.styles';
import Error from 'components/common/components/error/Error';
import { useEffect, useState } from 'react';
import { setErrAddContact } from 'components/redux/errorSlice';
import { Divider } from '@mui/material';

const ContactsPage = () => {
  const [errorAlert, setErrorAlert] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const errorContacts = useSelector(selectErrContacts);
  const errorAddContact = useSelector(selectErrAddContact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorAddContact) {
      setErrorAlert(errorAddContact);
      setTimeout(() => {
        setErrorAlert(null);
        dispatch(setErrAddContact(''));
      }, 1500);
    }
  }, [errorAddContact, dispatch]);

  useEffect(() => {
    if (errorContacts) {
      setErrorAlert(errorContacts);
      setTimeout(() => {
        setErrorAlert(null);
      }, 1500);
    }
  }, [errorContacts, isLoading]);

  return (
    <>
      {isLoading && <Loader />}
      {errorAlert && <Error error={errorAlert} />}
      <Container>
        <Cover>
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
        </Cover>
      </Container>
    </>
  );
};

export default ContactsPage;
