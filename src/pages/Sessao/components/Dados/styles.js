import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden',

  '.span': {
    color: '#00ffff',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 0rem 0rem 1rem',

    svg: {
      marginBottom: '.25rem'
    }
  }

});

export const Body = styled('div', {

  maxHeight: 'calc(100% - 60px)',
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexWrap: 'wrap'

});

export const Header = styled('div', {

  height: '60px',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: 'white',
    fontFamily: 'Special Elite',
    textAlign: 'center',
    fontSize: '2.4rem',
    letterSpacing: '1px',
    border: '2px solid grey',
    padding: '.8rem 1rem .4rem 1rem',
  },

});