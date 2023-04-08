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
  padding: '2rem 3rem',
  overflowY: 'auto',
  overflowX: 'hidden',

  '.button': {
    width: 'fit-content',
    background: 'none',
    border: '2px solid #00ffff',
    borderRadius: '7px',
    color: '#d0d0d0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: '.5rem 1rem',
    transition: '.3s',
    gap: '1rem',

    svg: {
      marginBottom: '2px'
    },

    '&:hover': {
      background: '#00ffff25'
    }
  },

  variants: {
    low: {
      true: {
        maxHeight: 'calc(100% - 110px)',
      }
    }
  }

});

export const DivAtributos = styled('div', {

  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  '.buttonedit': {
    position: 'absolute',
    top: 20,
    right: 40
  }

});

export const Header = styled('div', {

  minHeight: '60px',
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