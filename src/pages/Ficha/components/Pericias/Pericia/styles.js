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
  },

  '.plus': {
    fontFamily: 'Special Elite',
    textTransform: 'capitalize',
    fontSize: '2rem',
    marginBottom: '.5rem',
    marginLeft: '.5rem'
  }

});

export const Button = styled('button', {

  minWidth: '14rem',
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
    semperm: {
      true: {
        '&:hover': {
          background: 'none !important',
          cursor: 'default'
        }
      }
    },
    level: {
      nt: {
        border: '2px solid #797979',
        color: '#797979',

        '.plus': {
          color: '#797979',
        },

        '&:hover': {
          background: '#79797950'
        }
      },
      t: {
        border: '2px solid #00632b',
        color: '#00632b',

        '.plus': {
          color: '#00632b',
        },

        '&:hover': {
          background: '#00632b50'
        }
      },
      v: {
        border: '2px solid #0059ff',
        color: '#0059ff',

        '.plus': {
          color: '#0059ff',
        },

        '&:hover': {
          background: '#0059ff50'
        }
      },
      e: {
        border: '2px solid #ffd500',
        color: '#ffd500',

        '.plus': {
          color: '#ffd500',
        },

        '&:hover': {
          background: '#ffd50050'
        }
      }
    }
  }

});