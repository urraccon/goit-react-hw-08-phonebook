import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;

  @media screen and (min-width: 1024px) {
    max-height: 160px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 320px;
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
