import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    overflow: auto;
  }
`;

export const PaperStyling = {
  height: 'fit-content',
  margin: '15px',
  backgroundColor: '#fae5d6',
  border: '3px solid #d89c92',
  borderRadius: '30px',
};

export const Content = styled.div`
  display: flex;
  max-width: 400px;
  padding: 50px;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  text-align: center;
`;
