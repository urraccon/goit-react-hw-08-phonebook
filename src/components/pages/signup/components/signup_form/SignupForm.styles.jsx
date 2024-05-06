import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledNavLink = styled.span`
  font-weight: 900;
  margin-left: 3.2px;
  color: #ed6c02;
  cursor: pointer;
  &:hover {
    color: #e65100;
  }
`;
