'use client';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ColorLensTwoToneIcon from '@mui/icons-material/ColorLensTwoTone';
import WallpaperTwoToneIcon from '@mui/icons-material/WallpaperTwoTone';
import * as S from './AppMenu.styles';
import Fab from '@mui/material/Fab';

export function AppMenu({clockOpen, setClockOpen, paintOpen, setPaintOpen, bgPreferencesOpen, setBgPreferencesOpen, siteOpen, setSiteOpen}: any){

  return(
    <S.AppMenu>
      <Fab color="primary" aria-label="info" onClick={() => setSiteOpen(!siteOpen)} >
        <InfoTwoToneIcon fontSize="large" />
      </Fab>
      <Fab color="primary" aria-label="info" onClick={() => setClockOpen(!clockOpen)} >
        <AccessTimeTwoToneIcon fontSize="large" />
      </Fab>
      {/* <Fab color="primary" aria-label="jobs" onClick={() => alert('clicou')}>
        <BusinessCenterTwoToneIcon fontSize="large" />
      </Fab> */}
      <Fab color="primary" aria-label="jobs" onClick={() => setPaintOpen(!paintOpen)}>
        <ColorLensTwoToneIcon fontSize="large" />
      </Fab>
      <Fab color="primary" aria-label="jobs" onClick={() => setBgPreferencesOpen(!bgPreferencesOpen)}>
        <WallpaperTwoToneIcon fontSize="large" />
      </Fab>
      {/* <Fab color="primary" aria-label="jobs" onClick={() => alert('clicou')}>
        <TuneTwoToneIcon fontSize="large" />
      </Fab> */}
    </S.AppMenu>  
  )
}