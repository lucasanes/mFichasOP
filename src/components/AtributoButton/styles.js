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
    padding: '1rem 2rem 3rem 2rem',
    background: "none",
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    zIndex: 1,
    fontFamily: 'Special Elite',
    transition: '.3s',
    textAlign: 'center'
  },

  'button:hover': {
    color: 'Crimson'
  },

  '.b1': {
    position: 'absolute',
    width: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 28
  },

  '.b2': {
    position: 'absolute',
    width: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90,
    marginRight: '19rem'
  },

  '.b3': {
    position: 'absolute',
    width: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90,
    marginLeft: '18.7rem'
  },

  '.b4': {
    position: 'absolute',
    width: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 204,
    marginRight: '13.4rem'
  },

  '.b5': {
    position: 'absolute',
    width: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 204,
    marginLeft: '13.2rem'
  },

  variants: {
    semperm: {
      true: {
        'button:hover': {
          color: 'white'
        }
      }
    }
  }

})

export const Img = styled('img', {
  width: '30rem',
})