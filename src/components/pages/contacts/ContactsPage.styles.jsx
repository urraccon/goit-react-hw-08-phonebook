import styled from 'styled-components';

export const Container = styled.div`
  height: inherit;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    overflow: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaperStyling = {
  backgroundColor: '#fae5d6',
  border: '3px solid #d89c92',
  borderRadius: '30px',
};

export const PaperContent = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 400px;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
