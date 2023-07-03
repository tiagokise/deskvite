import { useState } from "react"
import {AppMenu} from "../../components/AppMenu/AppMenu"
import {ClockApp} from "../../components/ClockApp/ClockApp"
import {MenuBar} from "../../components/MenuBar/MenuBar"
import {PaintApp} from "../../components/PaintApp/PaintApp";
import { Rnd } from "react-rnd";
import * as S from '../../styles/Home.styles'
import bg from '../../assets/8038877_25101.jpg';

import BackgroundPreferences from "../../components/BackgroundPreferences/BackgroundPreferences";
import SiteTk from "../../components/SiteTk/SiteTk"
import '../../styles/globals.css'


export default function Home() {
  const [siteTkWidth, setSiteTkWidth] = useState<any>('80%')
  const [siteTkHeight, setSiteTkHeight] = useState<any>('80%')
  const [siteTkX, setSiteTkX] = useState<any>(0)
  const [siteTkY, setSiteTkY] = useState<any>(0)
  const [siteTKProps, setSiteTKProps] = useState<any>({x: setSiteTkX, y: siteTkY, width: siteTkWidth, height: siteTkHeight})
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
        <Rnd 
          size={{ width: siteTkWidth,  height: siteTkHeight }}
          position={{ x: siteTkX, y: siteTkY }}
          onDragStop={(e, d) => {
            e.preventDefault()
            e.stopPropagation()
            setSiteTkX(d.x)
            setSiteTkY(d.y)
            setSiteTKProps({x: d.x, y: d.y})
          } }
          onResize={(e: any, _direction: any, ref: any, _delta: any, position: any) => {
            e.preventDefault()
            e.stopPropagation()
            setSiteTkWidth(ref.offsetWidth)
            setSiteTkHeight(ref.offsetHeight)
            setSiteTkX(position.x)
            setSiteTkY(position.y)
            setSiteTKProps({width: siteTkWidth, height: siteTkHeight, x: siteTkX, y: siteTkY})
          }}
          // enableResizing={{ top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}
          bounds="parent"
          style={{zIndex: 99, minWidth: '100%', minHeight: '80%'}}
          {...siteTKProps}
        >
          <SiteTk siteOpen={siteOpen} setSiteOpen={setSiteOpen} />
        </Rnd>
        <ClockApp clockOpen={clockOpen} setClockOpen={setClockOpen}/>
        <PaintApp paintOpen={paintOpen} setPaintOpen={setPaintOpen}/>
        <BackgroundPreferences bgPreferencesOpen={bgPreferencesOpen} setBgPreferencesOpen={setBgPreferencesOpen} background={background} setBackground={setBackground}/>
      </S.Desktop>
      <AppMenu clockOpen={clockOpen} setClockOpen={setClockOpen} paintOpen={paintOpen} setPaintOpen={setPaintOpen}bgPreferencesOpen={bgPreferencesOpen} setBgPreferencesOpen={setBgPreferencesOpen} siteOpen={siteOpen} setSiteOpen={setSiteOpen}/>
    </S.Home>
  )
}

