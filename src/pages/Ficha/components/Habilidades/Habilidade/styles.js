import { keyframes } from '@stitches/react';
import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  color: '#b8b8b8',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  border: '2px solid #dddddd',
  borderRadius: '5px',
  position: 'relative',
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

  p: {
    padding: '1rem',
    fontFamily: '1.6rem'
  },

});

export const Button = styled('button', {
  background: 'none',
  border: 'none',
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
  
  svg: {
    marginBottom: '.5rem',
    transition: '.3s',
    overflow: 'visible'
  },

  variants: {
    active: {
      true: {
        svg: {
          transform: 'rotate(90deg)'
        }
      }
    }
  }
});