import { keyframes } from '@stitches/react';
import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  color: '#dddddd',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  border: '2px solid #ff4b4b',
  borderRadius: '5px',
  position: 'relative',

  hr: {
    borderColor: '#ff4b4b'
  },

});

export const ButtonInfo = styled('button', {

  background: 'none',
  border: '1px solid transparent',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.2rem',
  transition: '.3s',

  '&:hover': {
    borderColor: '#00ffff'
  },

});

export const Header1 = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  overflow: 'hidden',
  gap: '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginRight: '.5rem',
  },

  '.info': {
    marginRight: '1.5rem'
  }

});

export const Body = styled('div', {

  height: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 1rem',

  '.infos': {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem 1.5rem',
    margin: '2rem 0 1rem 0'
  },

  '.buttons': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
    marginTop: '.5rem',
  },

  img: {
    marginBottom: '1rem'
  },

  p: {
    border: '1px solid white',
    width: '100%',
    padding: '.5rem 1rem',
    margin: '.5rem 1rem',
    wordBreak: 'break-word',
    borderRadius: '5px'
  },

});

export const ButtonDados = styled('button', {

  width: 'fit-content',
  background: 'none',
  padding: '1rem',
  paddingBottom: '.6rem',
  fontFamily: 'Special Elite',
  transition: '.3s',
  
  variants: {
    semperm: {
      true: {
        '&:hover': {
          background: 'none',
          cursor: 'default'
        }
      }
    },
    isDano: {
      true: {
        border: '2px solid #ff4b4b',
        color: '#ff4b4b',

        '&:hover': {
          background: '#ff4b4b50'
        }
      },
      false: {
        border: '2px solid #00c5c5',
        color: '#00c5c5',

        '&:hover': {
          background: '#00c5c550'
        }
      }
    }
  }

});

export const Button = styled('button', {
  background: 'none',
  border: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  overflow: 'hidden',
  color: '#b8b8b8',
  paddingTop: '.3rem',
  fontFamily: 'El Messiri',
  fontSize: '1.8rem',
  gap: '.5rem',
  textTransform: 'capitalize',
  wordBreak: 'break-word',
  
  svg: {
    marginBottom: '.5rem',
    transition: '.3s',
    overflow: 'visible'
  },

  variants: {
    hover: {
      true: {
        svg: {
          transform: 'rotate(90deg)'
        }
      }
    },
  }
});