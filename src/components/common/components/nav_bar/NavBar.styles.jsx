import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 40px;
  background-color: #d09f94;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const Content = styled.div`
  display: flex;
  height: inherit;
  margin-right: 80px;
  align-items: center;
  justify-content: end;
  gap: 20px;
  color: white;

  @media screen and (max-width: 767px) {
    margin-right: 40px;
  }
`;
