import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Content, Header, Section } from './Sections.styles';

export const Sections = ({ name, descr, children }) => {
  return (
    <Section>
      <Content>
        <Header>
          <Typography variant="h5" ml={1.5}>
            {name}
          </Typography>
          <Typography varaian="h6">{descr}</Typography>
        </Header>
        {children}
      </Content>
    </Section>
  );
};

Sections.propTypes = {
  name: PropTypes.string,
  descr: PropTypes.string,
};
