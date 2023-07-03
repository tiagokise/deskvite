'use client'

import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useEffect, useState } from 'react';
import * as S from './ClockApp.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

export function ClockApp({ clockOpen, setClockOpen}: any) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
      <S.ClockApp isOpen={clockOpen} setIOpen={setClockOpen}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setClockOpen(!clockOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          {/* <iframe src="https://tiagok-dev.netlify.app/" frameBorder="0" width="1024" height="100%" ></iframe> */}
          <Clock value={value} />
        </S.ClockWrapper>
      </S.ClockApp>
    )
  }