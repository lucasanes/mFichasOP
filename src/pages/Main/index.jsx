import {Container} from './styles'
import {Home} from '../Home'
import {Fichas} from '../Fichas'
import {Sessoes} from '../Sessoes'
import {MenuBottom} from '../../components/MenuBottom'
import { SwiperSlide } from 'swiper/react';
import { ToastContainer } from 'react-toastify';

export function Main() {

  document.title = 'mFichasOP'

  return (
    <Container grabCursor threshold={10}>

      <SwiperSlide>
        <Home/>
      </SwiperSlide>

      <SwiperSlide>
        <Fichas/>
      </SwiperSlide>

      <SwiperSlide>
        <Sessoes/>
      </SwiperSlide>

      <MenuBottom/> 

    </Container>
  );
}