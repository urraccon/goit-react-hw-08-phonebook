import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/contactsFilterSlice';
import { selectTerm } from 'components/redux/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const term = useSelector(selectTerm);
  const dispatch = useDispatch();

  return (
    <TextField
      type="search"
      id="serach-bar"
      label="Search contacts by name"
      helperText="Enter a letter to start searching"
      size="small"
      color="warning"
      value={term}
      onChange={evt => dispatch(setFilter(evt.target.value))}
      sx={{
        minWidth: '28ch',
      }}
    />
  );
};
