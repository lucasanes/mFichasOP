import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #0050a6'

});

export const Header = styled('div', {

  borderBottom: '2px solid grey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.5rem 1rem',

  h1: {
    color: '#0050a6',
    fontSize: '2rem'
  }

});

export const HeaderButtons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  a: {
    background: 'none',
    border: '1px solid transparent',
    padding: '.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    transition: '.3s'
  },

  'a:hover': {
    border: '1px solid cyan'
  }

});

export const Body = styled('div', {

  padding: '1rem',

  img: {
    width: '80px',
    border: '1px solid white',
    borderRadius: '100%'
  }

});

export const Card = styled('div', {

});