import { styled } from "../../../stitches.config";

export const Container = styled('div', {

  width: '33rem',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '25px'
  },

  'button:active': {
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

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#ffffff90',
  padding: '2rem',
  gap: '2rem',

  '.div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    marginLeft: '-2rem',

    '@md': {
      marginLeft: '-1rem'
    },

    'button': {
      whiteSpace: 'nowrap',
      color: '#00fff7',
      fontSize: '1.4rem',
      background: 'none',
      border: '2px solid #00fff7',
      padding: '.5rem 1rem',
      borderRadius: '.5rem',
      transition: '.3s'
    },
  
    'button:active': {
  
      background: '#00fff750',
  
    }
  },

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    background: 'none',
    border: '2px solid #00ff88',
    color: '#00ff88',
    width: '90%',
    padding: '.7rem',
    transition: '.3s',
    borderRadius: '5px'
  },

  'button:active': {
    background: '#00ff8850'
  }

});