import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
`;

export const PaperStyling = {
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
  align-items: center;
  gap: 20px;

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
