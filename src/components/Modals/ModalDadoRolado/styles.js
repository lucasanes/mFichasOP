import { styled } from '../../../stitches.config';

export const Container = styled('div', {

  minWidth: '30rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  border: '1px solid grey',
  boxShadow: 'rgba(255, 255, 255, 0.5) 0rem 0rem 2rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 1rem',

  variants: {
    isDano: {
      true: {
        borderColor: '#ff4b4b'
      },
      false: {
        borderColor: '#00fff2' 
      }
    }
  }

})

export const Header = styled('div', {

  width: '100%',
  height: '5rem',
  borderRadius: '12px 12px 0px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgb(20,20,20)',
  padding: '0 2rem',
  paddingTop: '.2rem',

  button: {
    paddingTop: '.3rem',
  },

  h1: {
    fontSize: '2.2rem',
    textAlign: 'left',
    fontFamily: 'Arvo',
  },

  variants: {
    isDano: {
      true: {
        h1: { color: '#ff4b4b' }
      },
      false: {
        h1: { color: '#00fff2' }
      }
    }
  }

})

export const CloseButton = styled('button', {

  fontSize: '2rem',
  border: 'none',
  background: 'none',
  color: '#ffffff90',
  fontWeight: 100,

})

export const Main = styled('div', {

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '1rem',
  flexWrap: 'wrap',

  span: {
    fontSize: '2.5rem',
    fontFamily: 'Special Elite',
    wordBreak: 'break-all',
    marginTop: '1rem'
  },

})

export const Footer = styled('div', {

  display: 'flex',
  height: 'auto',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  fontFamily: 'Special Elite',
  gap: '.5rem'

})