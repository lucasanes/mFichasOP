import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

})

export const ContainerInput = styled('div', {
  width: '100%',
  overflow: 'hidden',
  border: "2px solid #ffffff90",
  borderRadius: '1rem',
  display: 'flex',
  background: 'transparent',
  zIndex: 3,

  variants: {
    dadoErro: {
      true: {
        border: 'solid 0.2rem #f83c3c'
      }
    }
  }
})

export const InputB = styled('input', {
  width: '100%',
  height: 'auto',
  wordWrap: 'break-all',
  fontSize: "1.6rem",
  padding: ".7rem",
  background: "transparent",
  border: 'none',
  borderLeft: '2px solid #ffffff90',
  outline: 'none',
  color: 'transparent',
  caretColor: 'white',
})

export const Select = styled('select', {

  width: '100%',
  height: 'auto',
  wordWrap: 'break-all',
  fontSize: "1.6rem",
  padding: ".7rem",
  background: "rgb(20,20,20)",
  color: 'white',
  outline: 'none',
  border: 'none',
  marginRight: '1rem'

});