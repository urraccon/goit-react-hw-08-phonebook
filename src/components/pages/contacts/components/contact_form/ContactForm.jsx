import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';
import { setErrAddContact } from 'components/redux/errorSlice';
import { Container, Fields, Form } from './ContactForm.styles';
import { Button, TextField } from '@mui/material';
import Validation from 'components/common/services/validation/Validation';

function checkContact(contacts, name) {
  const findContact = contacts.filter(contact => contact.name === name);
  if (findContact.length > 0) {
    return `${name} is already in contacts`;
  }
  return null;
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameErr, setNameErr] = useState(null);
  const [phoneErr, setPhoneErr] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formSubmit = evt => {
    evt.preventDefault();
    const checkName = Validation.checkName(name);
    const checkPhone = Validation.checkPhone(phone);
    const contactExist = checkContact(contacts, name);
    setNameErr(checkName);
    setPhoneErr(checkPhone);
    if (contactExist) {
      dispatch(setErrAddContact(contactExist));
    }
    if (!checkName && !checkPhone && !contactExist) {
      const contact = {
        name,
        phone,
      };
      dispatch(addContact(contact));
      setName('');
      setPhone('');
    }
  };

  return (
    <Container>
      <Form onSubmit={formSubmit}>
        <Fields>
          <TextField
            error={nameErr ? true : false}
            required
            type="text"
            id="name"
            label="Name"
            helperText={nameErr ? nameErr : "Please enter the contact's name"}
            size="small"
            color="warning"
            value={name}
            onChange={evt => setName(evt.target.value)}
            sx={{
              minWidth: '28ch',
            }}
          />
          <TextField
            error={phoneErr ? true : false}
            required
            type="tel"
            id="phone"
            label="Phone"
            helperText={
              phoneErr ? phoneErr : "Please enter the contact's phone"
            }
            size="small"
            color="warning"
            value={phone}
            onChange={evt => setPhone(evt.target.value)}
            sx={{
              width: '100%',
            }}
          />
        </Fields>
        <Button
          type="submit"
          variant="outlined"
          size="small"
          color="warning"
          sx={{
            fontWeight: 900,
            width: '100%',
          }}
        >
          Add contact
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
