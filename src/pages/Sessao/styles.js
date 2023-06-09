import { Swiper } from 'swiper/react';
import {styled} from '../../stitches.config';
import Loading from '../../assets/imgs/Loading2.gif'

export const Container = styled(Swiper, {

  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(20,20,20)',

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