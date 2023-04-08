import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  color: '#b8b8b8',
  display: 'flex',
  alignItems: 'left',
  fontFamily: 'El Messiri',
  flexDirection: 'column',
  gap: '1rem',
  border: '2px solid #00ff5e90',
  padding: '1rem',
  borderRadius: '5px',
  position: 'relative',
  
  hr: {
    margin: '0 -1rem',
    borderColor: '#00ff5e90'
  },

  span: {
    fontWeight: 700,
    paddingTop: '.2rem',
    textTransform: 'capitalize',
    fontSize: '1.8rem',
    paddingLeft: '1rem'
  }
});

export const Header1 = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#b8b8b8',

  div: {
    display: 'flex'
  },

  button: {
    marginRight: '.5rem',
  }

});