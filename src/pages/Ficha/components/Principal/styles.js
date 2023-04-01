import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden'

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 48px)',
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
    paddingTop: '0.4rem',
    letterSpacing: '1px'
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