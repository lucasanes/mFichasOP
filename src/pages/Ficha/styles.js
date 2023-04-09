import {styled} from '../../stitches.config';
import Loading from '../../assets/imgs/Loading2.gif'
import { Swiper } from 'swiper/react';

export const Container = styled(Swiper, {

  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(20,20,20)',

  '.swiper-pagination': {
    width: '100%',
    height: '60px',
    background: 'rgb(15,15,15)',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  variants: {
    isLoading: {
      true: {
        backgroundImage: `url(${Loading})`,
        backgroundSize: '15rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    }
  }
  
});

export const Body = styled('div', {

  width: '100%',
  height: '100%',

  variants: {
    isLoading: {
      true: {
        opacity: 0
      }
    }
  }

});