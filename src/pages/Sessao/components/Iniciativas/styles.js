import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden',

  '.span': {
    color: '#00ffff',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0rem 0rem 1rem',

    svg: {
      marginBottom: '.25rem'
    }
  }

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexWrap: 'wrap',

});

export const Header = styled('div', {

  height: '60px',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: 'white',
    fontFamily: 'Special Elite',
    textAlign: 'center',
    fontSize: '2.4rem',
    letterSpacing: '1px',
    border: '2px solid grey',
    padding: '.8rem 1rem .4rem 1rem',
  },

});

export const Button = styled('button', {

  padding: '.5rem 1rem .2rem 1rem',
  background: 'none',
  color: '#fff',
  borderRadius: '5px',
  fontSize: '2rem',
  fontFamily: 'El messiri',
  transition: '.3s',
  fontWeight: 700,

  variants: {
    precisaSalvar: {
      true: {
        border: '2px solid #ff0000',
        color: '#ff0000',

        '&:hover': {
          background: '#ff000035'
        }
      },
      false: {
        border: '2px solid #00ff51',
        color: '#00ff51',
        cursor: 'default',
        background: '#00ff5135'
      }
    }
  }

});