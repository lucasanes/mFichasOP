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
  paddingBottom: '.8rem',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  fontSize: '2.2rem',
  fontFamily: 'Rye',
  color: 'white',

  span: {
    fontSize: '1.8rem',
    fontFamily: 'Rye',
    marginTop: '-1rem'
  },
  variants: {
    isDano: {
      true: {
        textShadow: '#ff4b4b 2px 2px 3px',

        svg: {
          filter: 'drop-shadow(#ff4b4b 0 0 3px)'
        },

        '&:active': {
          border: '2px solid #ff4b4b',
        }
      },
      false: {
        textShadow: '#00fff2 2px 2px 3px',

        svg: {
          filter: 'drop-shadow(#00fff2 0 0 3px)'
        },

        '&:active': {
          border: '2px solid #00fff2',
        }
      }
    }
  }

});