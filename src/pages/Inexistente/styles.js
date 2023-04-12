import {styled} from '../../stitches.config';
import Fundo from '../../assets/imgs/Fundo_Energia.png'

export const Container = styled('div', {

  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  position: 'relative',
  background: `url(${Fundo})`,
  color: '#ffffff',

  div: {
    width: '100%',
    padding: '3rem 2rem',
    background: 'rgb(0,0,0, 0.75)',
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Rajdhani',
    border: '3px solid #ffffff',
    borderRadius: '1rem',
    boxShadow: '5px 5px 10px #ffffff'
  },

  img: {
    margin: '-2rem',
    borderBottom: '3px solid #ffffff',
    boxShadow: '0px 20px 10px #ffffff90',
    position: 'absolute',
    bottom: 0
  },

  h1: {
    fontSize: '3rem',
    marginTop: '3rem',  
    textShadow: '3px 3px 10px #6f00ff'
  },

  h2: {
    marginTop: '2rem',
    fontSize: '2rem',
    paddingRight: '10rem',
    textShadow: '3px 3px 10px #6f00ff'
  },

  h3: {
    marginTop: '2rem',
    fontSize: '1.6rem',
    textDecoration: 'underline',
    textShadow: '3px 3px 10px #6f00ff'
  },
});