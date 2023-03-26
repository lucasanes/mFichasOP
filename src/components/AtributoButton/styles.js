import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  button: {
    width: 'fit-content',
    height: 'fit-content',
    fontSize: "3.3rem",
    padding: '1rem .5rem 0rem .5rem',
    background: "none",
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 1,
    fontFamily: 'Special Elite',
    transition: '.3s',
  },

  'button:hover': {
    color: 'Crimson'
  }

})

export const Top = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  top: '8.5%',
})

export const Mid = styled('div', {
  position: 'absolute',
  top: '29.5%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15.9rem',
  marginRight: '0.2rem',
})

export const Bot = styled('div', {

  marginRight: '.3rem',
  position: 'absolute',
  top: '66.5%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10.5rem',
})

export const Img = styled('img', {
  width: '30rem',
})