import {styled} from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  border: '1px solid #fff',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 .2rem',

  input: {
    background: 'none',
    border: '1px solid #ffffff',
    padding: '.8rem .7rem .4rem .7rem',
    color: '#fff',
    height: '100%',
    outline: 'none'
  },

  span: {
    color: '#fff',
    marginLeft: '.2rem',
    border: '1px solid #fff',
    fontSize: '1.8rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 .8rem',
    fontFamily: 'special elite',
    paddingTop: '.3rem',
    fontWeight: 700
  },

  '.no': {
    minWidth: '7rem',
    width: '45%',
    fontFamily: 'special elite',
  },

  '.in': {
    minWidth: '3.5rem',
    width: '12%',
    fontFamily: 'special elite',
  },

  '.da': {
    minWidth: '5.3rem',
    width: '17%',
    fontFamily: 'special elite',
    marginRight: '.2rem'
  },

});

export const Button = styled('button', {

  background: 'none',
  border: '1px solid transparent',
  transition: '.2s',
  borderRadius: '5px',
  padding: '.3rem',
  margin: '.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    color: {
      aqua: {
        '&:hover': {
          border: '1px solid #00f7ff'
        }
      },

      red: {
        '&:hover': {
          border: '1px solid #ff0000'
        },
        position: 'relative',
        bottom: .5,
        marginLeft: '.2rem'
      }
    }
  }

});