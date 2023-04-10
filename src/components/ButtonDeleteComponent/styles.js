import {styled} from '../../stitches.config';

export const Container = styled('div', {

  width: 'fit-content',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    color: 'red',
    gap: '1rem',
    fontSize: '1.8rem',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.2rem',
    transition: '.3s'
  },

  'button:hover': {
    borderColor: 'red'
  },

  variants: {
    semperm: {
      true: {
        display: 'none !important'
      }
    }
  }
});