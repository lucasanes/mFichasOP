import {styled} from '../../stitches.config';

export const Container = styled('div', {

  width: 'fit-content',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
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
    borderColor: 'Yellow'
  },

  variants: {
    buttonDisabled: {
      true: {
        display: 'none !important'
      }
    }
  }
});