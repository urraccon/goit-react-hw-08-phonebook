import { Alert, Slide, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Alerts = ({ type, message }) => {
  const [active, setActive] = useState(true);

  return (
    <Snackbar
      open={active}
      onClose={() => {
        setActive(false);
      }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={2000}
      TransitionComponent={Slide}
    >
      <Alert
        severity={type}
        variant="filled"
        sx={{
          fontSize: 15,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

Alerts.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default Alerts;
