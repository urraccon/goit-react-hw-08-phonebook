import { Alert, AlertTitle } from '@mui/material';
import { Container } from './Alerts.styles';
import PropTypes from 'prop-types';

const Alerts = ({ type, message }) => {
  return (
    <Container>
      <Alert
        severity={type}
        variant="filled"
        sx={{
          fontWeight: 900,
        }}
      >
        <AlertTitle
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {type}
        </AlertTitle>
        {message}
      </Alert>
    </Container>
  );
};

Alerts.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Alerts;
