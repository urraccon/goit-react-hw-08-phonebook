import styled from 'styled-components';

export const Section = styled.section`
  width: 400px;
  height: calc(100% - 50px * 2);
  padding: 50px;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
