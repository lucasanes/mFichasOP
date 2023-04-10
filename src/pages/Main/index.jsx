import {Container} from './styles'
import {Home} from '../Home'
import {Fichas} from '../Fichas'
import {MenuBottom} from '../../components/MenuBottom'
import { SwiperSlide } from 'swiper/react';
import { ToastContainer } from 'react-toastify';

export function Main() {

  document.title = 'mFichasOP'

  return (
    <Container>

      <SwiperSlide>
        <Home/>
      </SwiperSlide>

      <SwiperSlide>
        <Fichas/>
      </SwiperSlide>

      <MenuBottom/> 

    </Container>
  );
}