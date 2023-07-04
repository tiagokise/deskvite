'use client';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import WallpaperTwoToneIcon from '@mui/icons-material/WallpaperTwoTone';
import * as S from './AppMenu.styles';
import Fab from '@mui/material/Fab';
import { Tooltip } from '@mui/material';

export function AppMenu({clockOpen, setClockOpen, paintOpen, setPaintOpen, bgPreferencesOpen, setBgPreferencesOpen, siteOpen, setSiteOpen}: any){

  return(
    <S.AppMenu>
      <Tooltip title="Informações" >
        <Fab color="primary" aria-label="info" onClick={() => setSiteOpen(!siteOpen)} >
          <InfoTwoToneIcon fontSize="large" />
        </Fab>
      </Tooltip>
      <Tooltip title="Relógio" >
        <Fab color="primary" aria-label="info" onClick={() => setClockOpen(!clockOpen)} >
          <AccessTimeTwoToneIcon fontSize="large" />
        </Fab>
      </Tooltip>
      {/* <Fab color="primary" aria-label="jobs" onClick={() => alert('clicou')}>
        <BusinessCenterTwoToneIcon fontSize="large" />
      </Fab> */}
      <Tooltip title="Pintura" >
        <Fab color="primary" aria-label="jobs" onClick={() => setPaintOpen(!paintOpen)}>
          <ColorLensTwoToneIcon fontSize="large" />
        </Fab>
      </Tooltip>
      <Tooltip title="Preferências de fundo" >
        <Fab color="primary" aria-label="jobs" onClick={() => setBgPreferencesOpen(!bgPreferencesOpen)}>
          <WallpaperTwoToneIcon fontSize="large" />
        </Fab>
      </Tooltip>
      {/* <Fab color="primary" aria-label="jobs" onClick={() => alert('clicou')}>
        <TuneTwoToneIcon fontSize="large" />
      </Fab> */}
    </S.AppMenu>  
  )
}