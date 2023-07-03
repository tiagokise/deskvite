import { useState } from "react"
import {AppMenu} from "../../components/AppMenu/AppMenu"
import {ClockApp} from "../../components/ClockApp/ClockApp"
import {MenuBar} from "../../components/MenuBar/MenuBar"
import {PaintApp} from "../../components/PaintApp/PaintApp";
import * as S from '../../styles/Home.styles'
import bg from '../../assets/8038877_25101.jpg';

import BackgroundPreferences from "../../components/BackgroundPreferences/BackgroundPreferences";
import SiteTk from "../../components/SiteTk/SiteTk"
import '../../styles/globals.css'


export default function Home() {
  const [clockOpen, setClockOpen] = useState<any>(false)
  const [paintOpen, setPaintOpen] = useState<any>(false)
  const [bgPreferencesOpen, setBgPreferencesOpen] = useState<any>(false)
  const [background, setBackground] = useState<any>(bg)
  const [siteOpen, setSiteOpen] = useState<any>(false)

  const handleClickOut = (e: any) => {
    if(e.target){
      // setClockOpen(false)
      // setPaintOpen(false)
      // setBgPreferencesOpen(false)
      // setSiteOpen(false)
      console.log('click out', e)
    }
  }

  return (
    
    <S.Home>
      <MenuBar clockOpen={clockOpen} setClockOpen={setClockOpen}/>
      <S.Desktop background={background}  onClick={handleClickOut}>
        <SiteTk siteOpen={siteOpen} setSiteOpen={setSiteOpen} />
        <ClockApp clockOpen={clockOpen} setClockOpen={setClockOpen}/>
        <PaintApp paintOpen={paintOpen} setPaintOpen={setPaintOpen}/>
        <BackgroundPreferences bgPreferencesOpen={bgPreferencesOpen} setBgPreferencesOpen={setBgPreferencesOpen} background={background} setBackground={setBackground}/>
      </S.Desktop>
      <AppMenu clockOpen={clockOpen} setClockOpen={setClockOpen} paintOpen={paintOpen} setPaintOpen={setPaintOpen}bgPreferencesOpen={bgPreferencesOpen} setBgPreferencesOpen={setBgPreferencesOpen} siteOpen={siteOpen} setSiteOpen={setSiteOpen}/>
    </S.Home>
  )
}

