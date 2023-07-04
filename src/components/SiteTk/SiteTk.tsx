'use client'

import 'react-clock/dist/Clock.css';
import * as S from './SiteTk.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { Rnd } from 'react-rnd';
import { useState } from 'react';

export default function SiteTk({ siteOpen, setSiteOpen}: any) {
  const [siteTkWidth, setSiteTkWidth] = useState<any>('100%')
  const [siteTkHeight, setSiteTkHeight] = useState<any>('85%')
  const [siteTkX, setSiteTkX] = useState<any>(0)
  const [siteTkY, setSiteTkY] = useState<any>(0)
  const [siteTKProps, setSiteTKProps] = useState<any>({x: setSiteTkX, y: siteTkY, width: siteTkWidth, height: siteTkHeight})

  return (
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
      bounds="body"
      style={{zIndex: 99}}
      {...siteTKProps}
    >
      <S.SiteTk isOpen={siteOpen} setIOpen={setSiteOpen}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setSiteOpen(!siteOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          {/* <S.SiteWrapper> */}
            {/* <div>
            <Typography variant="h4" component="h1" gutterBottom>Tiago K</Typography>
            <Typography variant="h4" component="p" gutterBottom>
              Primeiro site desenvolvido por mim, em 2019.
            </Typography>
            </div> */}
            <iframe src="https://tiagok-dev.netlify.app/" frame-border="0" width="100%" height="100%"  ></iframe>
          {/* </S.SiteWrapper> */}
        </S.ClockWrapper>
      </S.SiteTk>
    </Rnd>
    )
  }