import { styled } from "../../../../../stitches.config";

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
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  color: 'white',

  h1: {
    fontSize: '2rem',
    paddingBottom: '.3rem',
    fontFamily: 'Special Elite'
  },
  
  button: {
    background: 'none',
    border: "none",
    color: '#ffffff90',
    fontSize: '2.5rem',
    transition: '0.2s',
    padding: '0 10px 2px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:hover': {
    opacity: 0.5,
  },

   

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 130px)',
  padding: '1.9rem 1rem',
  overflow: 'hidden auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '.grid2': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
  },

  '.grid3': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem 1.5rem',

    '@md': {
      gridTemplateColumns: '1fr 1fr 1fr'
    }
  },

  hr: {
    margin: '.5rem'
  }

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    background: 'none',
    borderRadius: '5px',
    border: '2px solid #00ff88',
    color: '#00ff88',
    width: '90%',
    padding: '.4rem',
    fontFamily: 'Acme',
    fontSize: '2rem',
    transition: '.3s'
  },

  'button:hover': {
    background: '#00ff8850'
  }

});

export const Card = styled('div', {

  border: '2px solid #ffffff90',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1rem',
  
  h1: {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    padding: '1rem'
  },

  hr: {
    margin: 0,
  },

  '.body': {
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

});