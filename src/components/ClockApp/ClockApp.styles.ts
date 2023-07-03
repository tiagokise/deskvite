import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import {Window} from '../Window/Window';

export const ClockApp = styled(Window)<any>`
  position: absolute;
  top: 16px;
  right: 16px;

`

export const ClockWrapper = styled.div`
  padding: 8px;
  position: relative;
  >time{
    >div{
      background-color: azure !important; 
    }
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute !important;
  top: -14px;
  right: -14px;
`;