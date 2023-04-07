import { styled } from "../../../stitches.config";

export const Container = styled('div', {

  width: '30rem',
  borderRadius: '1.2rem',
  position: 'relative',
  backgroundColor: 'rgb(20,20,20)',
  boxShadow: 'rgba(255, 255, 255, 0.75) 0rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderColor: '#ffffff90'
  },

  '@md': {
    width: '45rem'
  },

})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  color: 'white',

  h1: {
    fontSize: '1.8rem',
    fontFamily: 'Special Elite'
  },
  
  button: {
    background: 'none',
    border: "none",
    color: '#ffffff90',
    fontSize: '2.5rem',
    transition: '0.2s',
    width: '30px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:focus': {
    opacity: 0.5,
  },

  '@md': {
    h1: {
      fontSize: '2.2rem'
    },
    
    button: {
      fontSize: '3rem',
    },
  },

  '@lg': {
    h1: {
      fontSize: '2.5rem'
    },
    
    button: {
      fontSize: '3.3rem',
    },
  },  

});

export const Body = styled('div', {

  textAlign: 'center',
  color: '#ffffff90',
  padding: '2rem 0rem .5rem 3rem',

  li: {
    fontFamily: 'Special Elite',
    marginBottom: '1.5rem',
  },

  strong: {
    color: 'white',
    fontWeight: 100
  }

});

export const Title = styled('h1', {

  color: 'white',
  fontSize: '2rem',
  fontFamily: 'Special Elite',
  marginBottom: '2rem',
  marginLeft: '-3rem'

});