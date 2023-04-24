import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  span: {
    color: '#f83c3c',
    position: 'absolute',
    fontSize: '1.6rem',
    right: '1.5rem',
    top: '1.4rem',
    fontFamily: 'emoji',
  },

})

export const Button = styled('button', {

  border: 'none',
  background: 'none',
  position: 'absolute',
  padding: '1rem',
  right: 0,
  bottom: 2,
  zIndex: 10

});

export const ContainerInput = styled('div', {
  width: '100%',
  overflow: 'hidden',
  border: "2px solid #ffffff90",
  borderRadius: '1rem',
  display: 'block',
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
  fontSize: "2rem",
  padding: "1rem",
  background: "transparent",
  borderRadius: "0.7rem",
  border: 'none',
  outline: 'solid 0.2rem white',
  color: 'transparent',
  caretColor: 'white',
})

export const LabelContainer = styled('label', {

  position: 'absolute',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  bottom: '20%',
  left: 15,
  zIndex: 1,
  fontSize: '2.4rem',
  fontWeight: 100,
  fontFamily: 'arial',
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '#ffffff90',
  transition: '0.3s',

  variants: {
    hover: {
      true: {
        fontSize: '2rem',
        transform: 'translateX(1rem) translateY(-2.7rem)',
        padding: '0px 10px',
        zIndex: 4
      }
    },
  },

})