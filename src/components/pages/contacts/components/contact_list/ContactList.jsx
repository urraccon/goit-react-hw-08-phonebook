import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'components/redux/contacts/selectors';
import {
  deleteContact,
  fetchContacts,
} from 'components/redux/contacts/operations';
import { useEffect } from 'react';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { Container, Scrollbar } from './ContactList.styles';
import { selectUserToken } from 'components/redux/auth/selectors';
import Config from 'components/common/Config';
import { useMediaQuery } from 'react-responsive';

export const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const accessToken = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const tablet = useMediaQuery({
    maxWidth: 1023,
  });

  useEffect(() => {
    if (accessToken) {
      Config.setRequestURL(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Scrollbar>
        <List
          aria-label="contacts"
          disablePadding
          sx={{
            marginRight: `${!tablet && '10px'}`,
          }}
        >
          {contacts.map(contact => (
            <div key={contact.id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <StarIcon
                    sx={{
                      fill: '#d89c92',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={contact.name} />
                <ListItemText secondary={contact.number} />
              </ListItem>
              {contacts.length - 1 !== contacts.indexOf(contact) && <Divider />}
            </div>
          ))}
        </List>
      </Scrollbar>
    </Container>
  );
};
