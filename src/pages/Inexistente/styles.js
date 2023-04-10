import {styled} from '../../stitches.config';
import Energia from '../../assets/imgs/404.png'

export const Container = styled('div', {

  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  background: 'rgb(20,20,20)',
  color: '#ffffff',

  div: {
    width: '100%',
    padding: '3rem 2rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    border: '3px solid #ffffff',
    borderRadius: '1rem',
    boxShadow: '5px 5px 10px #ffffff'
  },

  img: {
    margin: '0 -2rem'
  },

  h1: {
    fontSize: '8rem',
    textShadow: '2px 2px 5px #ffffff'
  },

  h2: {
    fontSize: '3rem',
    marginTop: '3rem',
    textShadow: '0px 0px 2px #ffffff'
  },

  h3: {
    marginTop: '2rem',
    fontSize: '2rem',
    paddingRight: '10rem',
    textShadow: '0px 0px 2px #ffffff'
  },

  h4: {
    marginTop: '2rem',
    fontSize: '1.6rem',
    textDecoration: 'underline',
    textShadow: '0px 0px 2px #ffffff'
  },
});