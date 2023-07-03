import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import {Window} from '../Window/Window';

export const SiteTk = styled(Window)<any>`
  position: relative;
  width: 100%;
  height: 100%;
  /* width: calc(100vw - 32px);
  height: calc(100vh - 170px); */
`

export const ClockWrapper = styled.div`
  padding: 28px 8px 8px;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  >time{
    >div{
      background-color: azure !important; 
    }
  }
  
`;

export const CloseButton = styled(IconButton)`
  position: fixed !important;
  top: -14px;
  right: -14px;
`;

export const SiteWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  /* overflow: hidden; */
  iframe{
    width: 70%;
    height: auto;
  }
  >div {
    flex: 1;
  }
`;