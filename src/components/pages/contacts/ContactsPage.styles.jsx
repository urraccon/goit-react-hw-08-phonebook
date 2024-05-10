import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    align-items: center;
  }

  @media screen and (max-width: 1023px) {
    overflow: auto;
  }
`;

export const PaperStyling = {
  height: 'fit-content',
  backgroundColor: '#fae5d6',
  border: '3px solid #d89c92',
  borderRadius: '30px',
};

export const Content = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 400px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
