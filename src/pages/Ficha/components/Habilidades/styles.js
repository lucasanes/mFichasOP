import {styled} from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflow: 'hidden'

});

export const Header = styled('div', {

  minHeight: '60px',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem'

});

export const Body = styled('div', {

  width: '100%',
  height: 'calc(100% - 60px)',
  padding: '2rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  gap: '2rem',

  variants: {
    low: {
      true: {
        maxHeight: 'calc(100% - 110px)'
      }
    }
  }

});

export const Button = styled('button', {

  color: 'white',
  fontFamily: 'Special Elite',
  textAlign: 'center',
  fontSize: '2.4rem',
  padding: '.8rem 1rem .4rem 1rem',
  letterSpacing: '1px',
  background: 'none',
  border: '2px solid grey',
  transition: '.3s',

  '&:active': {
    background: '#ffffff15'
  },

  variants: {
    active: {
      true: {
        background: '#ffffff30',
        cursor: 'default',

        '&:active': {
          background: '#ffffff30'
        },
      }
    }
  }

});