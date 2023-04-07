import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    color: 'white',
    fontFamily: 'Special Elite',
    textTransform: 'capitalize',
    fontSize: '2rem',
    paddingTop: '.5rem',
    textOverflow: 'ellipsis'
  }

});

export const Button = styled('button', {

  minWidth: '12rem',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.2rem .5rem',
  paddingTop: '.7rem',
  fontSize: '2rem',
  gap: '.3rem',
  borderRadius: '7px',
  transition: '.3s',
  fontFamily: 'Special ELite',

  svg: {
    marginBottom: '6px'
  },

  variants: {
    level: {
      nt: {
        border: '2px solid #797979',
        color: '#797979',

        '&:active': {
          background: '#79797950'
        }
      },
      t: {
        border: '2px solid #00632b',
        color: '#00632b',

        '&:active': {
          background: '#00632b50'
        }
      },
      v: {
        border: '2px solid #0059ff',
        color: '#0059ff',

        '&:active': {
          background: '#0059ff50'
        }
      },
      e: {
        border: '2px solid #ffd500',
        color: '#ffd500',

        '&:active': {
          background: '#ffd50050'
        }
      }
    }
  }

});