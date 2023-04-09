import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem 1rem',
  padding: '2rem 1rem',
  overflowY: 'auto !important',

  '@sm': {
    gridTemplateColumns: '1fr 1fr'
  },

  variants: {
    low: {
      true: {
        maxHeight: 'calc(100% - 110px)',
      }
    }
  }

});

export const Body2 = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
  padding: '3rem 1rem',
  overflowY: 'auto !important',
  
  variants: {
    low: {
      true: {
        maxHeight: 'calc(100% - 110px)',
      }
    }
  }

});

export const Header = styled('div', {

  height: '60px',
  width: '100%',
  padding: '1rem 6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',

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

  color: 'white',
  fontFamily: 'Special Elite',
  textAlign: 'center',
  fontSize: '2.4rem',
  padding: '.8rem 1rem .4rem 1rem',
  letterSpacing: '1px',
  background: 'none',
  border: '2px solid grey',
  transition: '.3s',

  '&:hover': {
    background: '#ffffff15'
  },

  variants: {
    hover: {
      true: {
        background: '#ffffff30',
        cursor: 'default',

        '&:hover': {
          background: '#ffffff30'
        },
      }
    }
  }

});