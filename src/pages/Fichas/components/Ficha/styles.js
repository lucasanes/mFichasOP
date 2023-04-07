import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #0050a6',
  borderRadius: '5px'

});

export const Header = styled('div', {

  borderBottom: '2px solid grey',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '.5rem 1rem',

  h1: {
    color: '#0050a6',
    fontSize: '2.2rem',
    fontFamily: 'Special Elite'
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

  'a:active': {
    border: '1px solid cyan'
  }

});

export const Body = styled('div', {

  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',

  '@md': {
    flexDirection: 'row'
  },

  '.grid': {
    width: '100%',
    display: 'grid',
    gap: '.5rem',

    '@sm': {
      gridTemplateColumns: '1fr 1fr'
    }
  },

  img: {
    width: '100px',
    border: '1px solid white',
    borderRadius: '2rem'
  }

});

export const Card = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'center',
  color: 'grey',
  fontFamily: 'El Messiri',
  border: '2px solid white',
  padding: '0.5rem 1rem 0.2rem 1rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  label: {
    fontWeight: 700
  },

  span: {
    paddingLeft: '.5rem',
    whiteSpace: 'nowrap',
  }


});