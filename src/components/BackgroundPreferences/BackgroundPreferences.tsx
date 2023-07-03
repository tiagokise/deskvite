import * as S from './BackgroundPreferences.styles';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOi4c30Bj3G9aGwVDt_Y_yYv6vVQJwl2iX3A&usqp=CAU',
    title: 'Breakfast',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52fGtjbhgi-QDffjJKMCvbPcigD6TwfvQXA&usqp=CAU',
    title: 'Burger',
  },
  {
    img: 'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-012.jpg',
    title: 'Burger',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFvZTbXuJQJ2_m0JvwWEaYhfoT37FTwvPVQ&usqp=CAU',
    title: 'Burger',
  },
  {
    img: 'https://img.freepik.com/vetores-gratis/vetor-de-fundo-de-padrao-geometrico-branco-e-dourado_53876-140726.jpg',
    title: 'Burger',
  },
  {
    img: 'https://img.freepik.com/vetores-gratis/fundo-branco-abstrato_23-2148810113.jpg',
    title: 'Burger',
  },
  
];
export default function BackgroundPreferences({ bgPreferencesOpen, setBgPreferencesOpen, setBackground}: any) {


  return (
      <S.BackgroundPreferences isOpen={bgPreferencesOpen} setIOpen={setBgPreferencesOpen}>
        <S.ClockWrapper>
          <S.CloseButton aria-label="close" onClick={() => setBgPreferencesOpen(!bgPreferencesOpen)} >
            <HighlightOffTwoToneIcon />
          </S.CloseButton>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                onClick={() => setBackground(item.img)}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </S.ClockWrapper>
      </S.BackgroundPreferences>
    )
  }