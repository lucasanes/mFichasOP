import {styled} from '../../stitches.config';

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgb(20,20,20)',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'hidden',

  hr: {
    borderColor: '#ffffff90'
  },

  form: {
    height: '100%'
  },
});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 130px)',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  color: '#ffffff90',
  padding: '2rem',
  gap: '2rem',
  overflowY: 'auto',

  '.div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'button': {
      whiteSpace: 'nowrap',
      color: '#00fff7',
      fontSize: '1.4rem',
      background: 'none',
      border: '2px solid #00fff7',
      padding: '.5rem 1rem',
      borderRadius: '.5rem',
      transition: '.3s',
    },
  
    'button:hover': {
  
      background: '#00fff750',
  
    }
  },

  variants: {
    isLoading: {
      true: {
        opacity: 0,
        padding: 0,
        height: 0
      }
    }
  }

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
    fontFamily: 'Acme',
    fontSize: '2rem',
    padding: '.4rem',
    transition: '.3s',
    borderRadius: '5px'
  },

  'button:hover': {
    background: '#00ff8850'
  }

});

export const Card = styled('div', {

  border: '2px solid #ffffff90',
  width: '100%',
  
  h1: {
    margin: '.7rem',
    textAlign: 'left',
    paddingLeft: '.7rem',
    fontSize: '1.8rem'
  },

  '.body': {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: '2rem'
  }

});