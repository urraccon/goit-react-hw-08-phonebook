import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  padding: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 400px;
    min-height: 300px;
    padding: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
  }
`;
