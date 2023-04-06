import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

})

export const InputB = styled('input', {

  width: '100%',
  overflow: 'hidden',
  border: "2px solid #ffffff90",
  borderRadius: '.5rem',
  display: 'block',
  background: 'transparent',
  zIndex: 3,
  fontSize: "1.6rem",
  padding: ".5rem 1rem",
  textOverflow: 'ellipsis',
})

export const LabelContainer = styled('label', {

  position: 'absolute',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  bottom: '20%',
  fontSize: '1.8rem',
  transform: 'translateX(.5rem) translateY(-1.8rem)',
  padding: '0px 10px',
  zIndex: 4,
  left: 15,
  fontWeight: 100,
  fontFamily: 'arial',
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '#ffffff90',
  transition: '0.3s',
  textTransform: 'capitalize'
})