'use client'
import 'react-clock/dist/Clock.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './Gallery.styles';

export function Gallery({ clockOpen, setClockOpen}: any) {
  const [currentPic, setCurrentPic] = useState<any>(4)

  const handleClick = useCallback((e: any) => {
    e.preventDefault()
    if(e.target){
      setCurrentPic(e.target.id)
    }
  }, [setCurrentPic])
  console.log('currentPic', currentPic)
  return (
      <S.Gallery isOpen={clockOpen} setIOpen={setClockOpen} currentPic={currentPic}>
        <img src="https://picsum.photos/300/200" alt="random" id="1" onClick={handleClick} />
        <img src="https://placekitten.com/600/300" alt="random" id="2" onClick={handleClick} />
        <img src="https://picsum.photos/600/400" alt="random" id="3" onClick={handleClick} />
        <img src="https://placekitten.com/1000/800" alt="random" id="4" onClick={handleClick} />
        <img src="https://picsum.photos/800/600" alt="random" id="5" onClick={handleClick} />
        <img src="https://placekitten.com/1000/800" alt="random" id="6" onClick={handleClick} />
        <img src="https://picsum.photos/1000/600" alt="random" id="7" onClick={handleClick} />
        <img src="https://picsum.photos/300/200" alt="random" id="8" onClick={handleClick} />
        <img src="https://placekitten.com/600/300" alt="random" id="9" onClick={handleClick} />
        <img src="https://picsum.photos/600/400" alt="random" id="10" onClick={handleClick} />
        <img src="https://placekitten.com/1000/800" alt="random" id="11" onClick={handleClick} />
        <img src="https://picsum.photos/800/600" alt="random" id="12" onClick={handleClick} />
        <img src="https://placekitten.com/1000/800" alt="random" id="13" onClick={handleClick} />
        <img src="https://picsum.photos/1000/600" alt="random" id="14" onClick={handleClick} />
        {/* <img src="https://picsum.photos/300/200" alt="random" id="8" onClick={handleClick} /> */}
      </S.Gallery>
    )
  }