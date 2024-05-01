import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Content, Header, SectionContainer } from './Section.styles';

export const Section = ({ name, descr, children }) => {
  return (
    <SectionContainer>
      <Content>
        <Header>
          <Typography variant="h5" ml={1.5}>
            {name}
          </Typography>
          <Typography varaian="h6">{descr}</Typography>
        </Header>
        {children}
      </Content>
    </SectionContainer>
  );
};

Section.propTypes = {
  name: PropTypes.string,
  descr: PropTypes.string,
};
