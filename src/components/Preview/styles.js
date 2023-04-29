import {styled} from '../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '-1.5rem 0 -.5rem 0',
  gap: '1rem',
  marginLeft: '1rem',

  img: {
    maxWidth: '75px',
    maxHeight: '75px',
    objectFit: 'contain'
  }
});