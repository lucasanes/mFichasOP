import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  color: '#b8b8b8',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  gap: '1rem',
  border: '2px solid #dddddd',
  padding: '1rem',
  borderRadius: '5px',
  position: 'relative',
  
  hr: {
    margin: '0 -1rem'
  },

  span: {
    fontWeight: 700,
    textTransform: 'capitalize'
  }
});

export const Header1 = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#b8b8b8',

  button: {
    marginRight: '.5rem',
  }

});