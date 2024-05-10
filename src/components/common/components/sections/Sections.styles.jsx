import styled from 'styled-components';

export const Section = styled.section`
  min-width: 400px;
  min-height: 300px;
  padding: 50px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
