import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  border: '2px solid #bbbbbbff',
  borderRadius: '.5rem',
  padding: '1rem 1.5rem'

});

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  h1: {
    color: '#fff',
    marginTop: '.7rem',
    fontSize: '1.8rem',
    fontFamily: 'El Messiri',
    letterSpacing: '1px'
  },

  span: {
    color: '#bbbbbbff',
    marginTop: '1.5rem',
    fontSize: '1.6rem',
    fontFamily: 'El Messiri',
    letterSpacing: '.5px'
  }

});

export const Img = styled('div', {

  width: '75px',
  height: '75px',
  border: '2px solid white',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    width: '75px',
    height: '75px',
    borderRadius: '100%',
    objectFit: 'cover',
    transition: '1s',
  },

});

export const Body = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '2rem',
  overflow: 'hidden',

  h1: {
    color: '#fff',
    fontSize: '2.2rem',
    marginTop: '1.3rem',
    wordBreak: 'break-word',
    fontFamily: 'Special Elite'
  },

  h2: {
    color: '#fff',
    fontSize: '2rem',
    marginTop: '1.3rem',
    marginBottom: '2rem',
    wordBreak: 'break-word',
    fontFamily: 'Special Elite'
  },

  span: {
    color: '#bbbbbbff',
    wordBreak: 'break-word',
    fontFamily: 'Special Elite',
    fontSize: '1.6rem'
  },

  variants: {
    dano: {
      true: {
        h1: {
          color: '#ff4b4b'
        }
      },
      false: {
        h1: {
          color: '#00fff2'
        }
      }
    }
  }

});