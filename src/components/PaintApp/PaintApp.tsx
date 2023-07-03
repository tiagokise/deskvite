'use client'

import 'react-clock/dist/Clock.css';
import * as S from './PaintApp.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import { ReactPainter } from 'react-painter';
import { Fab } from '@mui/material';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { useEffect, useState } from 'react';

const swatchColors = [ '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080' ]

export function PaintApp({ paintOpen, setPaintOpen}: any) {
  const [newColor, setNewColor] = useState<any>('')
  useEffect(() => {
    const colorInUse: any = document.querySelector('#color');
    colorInUse?.addEventListener('onmouseover', () => {
      setNewColor(colorInUse.value)
      console.log('color', newColor)
    })

    // if(colorInUse?.value){
    //   console.log('color', colorInUse)
    //   setNewColor(colorInUse?.value)
    //   console.log('color', newColor)
    // }
    // console.log('color', newColor)
    
    // console.log(colorInUse.value)
    // colorInUse.addEventListener('click', () => {
    //   console.log('color', colorInUse.target.value)
    // })
  }, [])
  const Drawable = () => (
    <ReactPainter
    width={1700}
    height={680}
    onSave={blob => console.log(blob)}
    render={({ triggerSave, canvas, setColor }) => {
        return (<S.Painter>
          <S.PainterWrapper >
            {canvas}
          </S.PainterWrapper>
          <S.PainterControls>
          <Fab color='primary'>
            <S.ColorInput 
              id="color"
              type="color" 
              onChange={(e: any) => (setColor(e.target.value), console.log('color'))} 
            />
            <FormatColorFillIcon fontSize='large' />
          </Fab>
          <Fab onClick={triggerSave} color="primary">
            <SaveTwoToneIcon fontSize='large' />
          </Fab>
          <S.SwatchWrapper>
            {swatchColors.map((color, index) => (
              <S.Swatch
                key={index}
                style={{ background: color }}
                onClick={() => {setColor(color)}}
              />
            ))}
          </S.SwatchWrapper>
          </S.PainterControls>
        </S.Painter>)
      }}
    />
  );
  
  return (
      <S.PaintApp isOpen={paintOpen} setIOpen={setPaintOpen}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setPaintOpen(!paintOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          <Drawable />
        </S.ClockWrapper>
      </S.PaintApp>
    )
  }