import styled, { css } from 'styled-components'

export const Gallery = styled.div<any>`
  display: grid;
  flex-wrap: wrap;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(4, 1fr);
  ${({currentPic}) => css`
  >img{
    width: 100%;
    height: 100%;
    min-height: calc(100vh / 4);
    max-height: calc(100vh / 4);
    object-fit: cover;
  }
  >img[id="${currentPic}"]{
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 4;
      max-height: calc(100vh / 2);
      z-index: 2;
      /* width: 100vw; */
    }
  `}

  &:after{
    content: '';
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
  }
  >img{
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
      z-index: 3;
    }
  }
`;
