import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PaperStyling = {
  backgroundColor: '#fae5d6',
  border: '3px solid #d89c92',
  borderRadius: '30px',
};

export const Content = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 400px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  text-align: center;
`;
