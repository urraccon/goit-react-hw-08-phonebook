import styled from 'styled-components';

export const Container = styled.div`
  height: 160px;
  overflow: auto;
  width: 85%;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(237, 108, 2);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(230, 81, 0);
  }
`;
