import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden'

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem 1rem',
  padding: '2rem 1rem',
  overflowY: 'auto',

  '@sm': {
    gridTemplateColumns: '1fr 1fr'
  }

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

  button: {
    position: 'fixed',
    right: 15,
    background: 'none',
    border: '1px solid transparent',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.2rem',
    transition: '.3s'
  },

  'button:hover': {
    borderColor: 'Yellow'
  }

});