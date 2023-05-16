import {styled} from '../../stitches.config';
import Loading from '../../assets/imgs/Loading2.gif'
import { Link } from 'react-router-dom';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  overflowX: "hidden",
  overflowY: 'auto',
  backgroundColor: 'rgb(20,20,20)',

  variants: {
    isLoading: {
      true: {
        backgroundImage: `url(${Loading})`,
        backgroundSize: '15rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    }
  }
  
});

export const Body = styled('div', {

  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  variants: {
    isLoading: {
      true: {
        opacity: 0
      }
    }
  }

});

export const Button = styled(Link, {

  background: 'none',
  border: '2px solid #0050a6',
  color: '#0050a6',
  width: '100%',
  fontFamily: 'Acme',
  fontSize: '2rem',
  padding: '.4rem',
  transition: '.3s',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '5px',
  letterSpacing: '1px',

  '&:hover': {
    background: '#0050a650'
  },

});