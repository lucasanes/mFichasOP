import {styled} from '../../stitches.config';
import bg from '../../assets/imgs/bg.webp'

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflowX: "hidden",
  overflowY: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '4rem 2rem',

});

export const DivTitle = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'

});

export const Title = styled('h1', {

  letterSpacing: '5px',
  marginBottom: '6rem',
  color: 'white',
  fontSize: '6rem',
  fontFamily: 'Special Elite',
  zIndex: 1

});

export const BgTitle = styled('h1', {

  marginBottom: '7rem',
  color: '#ffffff20',
  fontSize: '5rem',
  fontFamily: 'sinais',
  textShadow: '#ffffff90 0px 0px 20px, white 0px 0px 30px',
  position: 'fixed'

});

export const SubTitles = styled('span', {

  color: 'white',
  marginTop: '-3rem',
  marginBottom: '4rem',
  fontFamily: 'El Messiri',
  fontSize: '2rem',
  textAlign: 'center'

});