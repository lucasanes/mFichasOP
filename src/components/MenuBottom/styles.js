import { Link } from 'react-router-dom';
import {styled} from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '80px',
  background: 'rgb(15,15,15)',
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

});

export const Button = styled(Link, {

  width: '100%',
  height: '100%',
  background: 'none',
  color: '#ffffff90',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  fontSize: '2rem',
  border: '2px solid #ffffff90',
  transition: '0.2s',
  fontFamily: 'Special Elite',
  letterSpacing: '2px',
  textDecoration: 'none',

  '&:hover': {
    background: '#ffffff10',
  }

});