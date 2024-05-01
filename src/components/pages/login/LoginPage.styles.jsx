import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  background-color: #fae5d6;
  padding: 50px;
  border: 3px solid #d89c92;
  border-radius: 30px;
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
