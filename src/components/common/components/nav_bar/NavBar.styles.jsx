import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  background-color: #d09f94;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const Content = styled.div`
  height: inherit;
  color: white;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 80px;
  gap: 20px;
`;
