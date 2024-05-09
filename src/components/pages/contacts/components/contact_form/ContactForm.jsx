import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'components/redux/contacts/selectors';
import { addContact } from 'components/redux/contacts/operations';
import { Container, Fields, Form } from './ContactForm.styles';
import { Button, TextField } from '@mui/material';
import Validation from 'components/common/services/Validation';
import { setRejectedStatus } from 'components/redux/contacts/slices/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameErr, setNameErr] = useState(null);
  const [phoneErr, setPhoneErr] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formSubmit = evt => {
    evt.preventDefault();
    const isNameInvalid = Validation.checkName(name);
    const isPhoneInvalid = Validation.checkPhone(phone);
    const isContactDuplicated = Validation.checkContact(contacts, name);
    setNameErr(isNameInvalid);
    setPhoneErr(isPhoneInvalid);
    if (isContactDuplicated) {
      const rejectedStatus = {
        error: isContactDuplicated,
        operation: 'duplicateContact',
      };
      dispatch(setRejectedStatus(rejectedStatus));
    }
    if (!isNameInvalid && !isPhoneInvalid && !isContactDuplicated) {
      const contact = {
        name,
        number: phone,
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
