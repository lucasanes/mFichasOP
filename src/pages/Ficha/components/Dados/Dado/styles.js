import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

});

export const Button = styled('button', {

  background: 'none',
  border: '2px solid transparent',
  transition: '.3s',
  padding: '0rem 1rem',
  paddingTop: '1rem',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  fontSize: '2.2rem',
  fontFamily: 'El Messiri',

  span: {
    fontSize: '1.8rem',
    fontFamily: 'El Messiri',
    marginTop: '-1rem'
  },

  variants: {
    isDano: {
      true: {
        color: '#ff4b4b',

        '&:hover': {
          border: '2px solid #ff4b4b',
        }
      },
      false: {
        color: '#00fff2',

        '&:hover': {
          border: '2px solid #00fff2',
        }
      }
    }
  }

});