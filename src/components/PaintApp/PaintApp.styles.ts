import styled, {css} from 'styled-components'
import IconButton from '@mui/material/IconButton'
import {Window} from '../Window/Window';

export const PaintApp = styled(Window)<any>`
  ${({isOpen}: any) => css`
    position: absolute;
    left: 16px;
    top: 16px;
    width: calc(100vw - 32px);
    height: calc(100vh - 170px);
    display: grid;
    overflow: hidden;
    display: ${isOpen ? 'grid' : 'none'};
  `}

`

export const ClockWrapper = styled.div`
  padding: 22px 22px 8px 8px;
  position: relative;
  width: calc(100vw - 32px);
  height: calc(100vh - 184px);

`;

export const CloseButton = styled(IconButton)`
  position: absolute !important;
  top: -16px;
  right: 4px;

`;

export const Painter = styled.div`
    display: flex;
    flex-direction: row-reverse;

`;

export const PainterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  overflow: hidden;
  canvas {
    cursor: crosshair;
  }
`;

export const SwatchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  row-gap: 8px;
  align-items: center;
  background-color: #ffffff;
  /* background-color: rgb(25, 118, 210); */
  border: 3px solid rgb(25, 118, 210);
  /* padding: 10px; */
  border-style: outside;
  justify-content: flex-start;
  flex-flow: wrap;
  max-width: 56px;
  padding: 4px;
  border-radius: 12px;
`;

export const Swatch = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  /* border: 2px solid rgb(25, 118, 210); */
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
`;


export const PainterControls = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 0 10px;
  flex-direction: column;
  justify-content: flex-start;
  input[type="color" i] {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    overflow: hidden;
    block-size: 100%;
    background-color: transparent;
    cursor: pointer;
    color: transparent;
    div{
      background-color: transparent !important;
    }
  }
  input[type="color" i]::-webkit-color-swatch {
    background-color: transparent !important;
    border: none;
  }

`;

export const ColorInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color : transparent;
`;