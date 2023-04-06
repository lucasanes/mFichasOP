import { keyframes } from '@stitches/react';
import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  color: '#dddddd',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  border: '2px solid #dddddd',
  borderRadius: '5px',
  position: 'relative',

  variants: {
    elemento: {
      conhecimento: {
        borderColor: '#ffd500'
      },
      energia: {
        borderColor: '#7700ff'
      },
      morte: {
        borderColor: '#4d4d4d'
      },
      sangue: {
        borderColor: '#980000'
      },
      medo: {
        borderColor: '#dddddd'
      },
    }
  }
});

export const Header1 = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  overflow: 'hidden',
  gap: '1rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginRight: '.5rem',
  }

});

export const Body = styled('div', {

  height: 'auto',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 1rem',

  img: {
    margin: '1rem 0',
    marginBottom: '2rem',
    border: '2px solid white',
    padding: '.5rem',
    borderRadius: '20px'
  },

  '.buttons': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    margin: '1.5rem',
    width: '100%'
  },

  '.infos': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },

  p: {
    border: '1px solid white',
    width: '100%',
    padding: '.5rem 1rem',
    marginBottom: '1rem',
    wordBreak: 'break-word'
  },

  button: {
    background: 'none',
    border: '1px solid #909090',
    color: '#dbdbdb',
    padding: '.8rem 1rem .5rem 1rem',
    borderRadius: '3px',
    fontFamily: 'Special Elite',
    width: '100%',
    transition: '.3s'
  },

  'button:hover': {
    background: '#7c7c7c50'
  }

});

export const Button = styled('button', {
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  overflow: 'hidden',
  color: '#b8b8b8',
  paddingTop: '.3rem',
  fontFamily: 'El Messiri',
  fontSize: '1.8rem',
  gap: '.5rem',
  textTransform: 'capitalize',
  wordBreak: 'break-word',
  
  svg: {
    marginBottom: '.5rem',
    transition: '.3s',
    overflow: 'visible'
  },

  variants: {
    active: {
      true: {
        svg: {
          transform: 'rotate(90deg)'
        }
      }
    },
    elemento: {
      conhecimento: {
        color: '#ffd500'
      },
      energia: {
        color: '#7700ff'
      },
      morte: {
        color: '#4d4d4d'
      },
      sangue: {
        color: '#980000'
      },
      medo: {
        color: 'white'
      },
    }
  }
});