import styled from 'styled-components';

export const Container = styled.div`
@ media screen and (min-width: 1024px) {
  max-height: 160px;
}
  
  width: 85%;
  }
`;

export const Scrollbar = styled.div`
  height: 100%;

  @media screen and (min-width: 1024px) {
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: white;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(237, 108, 2);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgb(230, 81, 0);
    }
  }
`;
