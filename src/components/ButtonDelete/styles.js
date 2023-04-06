import {styled} from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 15,

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
    borderColor: 'red'
  }
});