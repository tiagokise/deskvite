'use client'

import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useEffect, useMemo, useState } from 'react';
import * as S from './ClockApp.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { Rnd } from 'react-rnd';

export function ClockApp({ clockOpen, setClockOpen}: any) {
  const windowWidth =  useMemo(() => window && window.innerWidth, [window.innerWidth])
  const [clockX, setClockX] = useState<any>((windowWidth / 2) - (204 / 2))
  const [clockY, setClockY] = useState<any>(20)
  
  const [clockProps, setClockProps] = useState<any>({x: setClockX, y: clockY, width: '204px', height: '204px'})
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  useEffect(() => {
    if (clockOpen) {
      setClockX((windowWidth / 2) - (204 / 2))
      setClockY((20))
    }
  }, [clockOpen, windowWidth])


  return (
    <Rnd 
      size={{ width: '204px',  height: '204px' }}
      position={{ x: clockX, y: clockY }}
      onDragStop={(e, d) => {
        e.preventDefault()
        e.stopPropagation()
        setClockX(d.x)
        setClockY(d.y)
        setClockProps({x: d.x, y: d.y})
      } }
      enableResizing={false}
      // enableResizing={{ top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}
      bounds="parent"
      style={{zIndex: 99}}
      {...clockProps}
    >
      <S.ClockApp isOpen={clockOpen} setIOpen={setClockOpen}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setClockOpen(!clockOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          {/* <iframe src="https://tiagok-dev.netlify.app/" frameBorder="0" width="1024" height="100%" ></iframe> */}
          <Clock value={value} />
        </S.ClockWrapper>
      </S.ClockApp>
    </Rnd>
    )
  }