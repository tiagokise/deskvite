'use client'

import 'react-clock/dist/Clock.css';
import * as S from './SiteTk.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { Typography } from '@mui/material';

export default function SiteTk({ siteOpen, setSiteOpen, ref}: any) {

  return (
      <S.SiteTk isOpen={siteOpen} setIOpen={setSiteOpen} ref={ref}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setSiteOpen(!siteOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          <S.SiteWrapper>
            <div>
            <Typography variant="h4" component="h1" gutterBottom>Tiago K</Typography>
            <Typography variant="h4" component="p" gutterBottom>
              Primeiro site desenvolvido por mim, em 2019.
            </Typography>
            </div>
            <iframe src="https://tiagok-dev.netlify.app/" frame-border="0" width="1024" height="100%"  ></iframe>
          </S.SiteWrapper>
        </S.ClockWrapper>
      </S.SiteTk>
    )
  }