import { Alert, AlertTitle } from '@mui/material';
import { Container } from './Error.styles';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return (
    <Container>
      <Alert
        severity="error"
        variant="filled"
        sx={{
          fontWeight: 900,
        }}
      >
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    </Container>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
