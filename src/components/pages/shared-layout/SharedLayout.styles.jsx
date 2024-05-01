import styled from 'styled-components';
import bg from '../../images/BG.jpg';

export const Background = styled.div`
  background-image: url(${bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: #f8e6d0;
  position: relative;
`;
