import { keyframes } from '@stitches/react';
import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  color: '#dddddd',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  border: '2px solid #004a94',
  borderRadius: '5px',
  position: 'relative',

  hr: {
    borderColor: '#004a94'
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
    display: 'flex',
    gap: '1.5rem',
    margin: '2rem 0 1rem 0'
  },

  p: {
    border: '1px solid white',
    width: '100%',
    padding: '.5rem 1rem',
    margin: '.5rem 1rem',
    wordBreak: 'break-word',
    borderRadius: '5px'
  },

  img: {
    marginBottom: '1rem'
  },

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