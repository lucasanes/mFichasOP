import {Container} from './styles'
import {Home} from '../Home'
import {Fichas} from '../Fichas'
import {MenuBottom} from '../../components/MenuBottom'
import { SwiperSlide } from 'swiper/react';

export function Main() {


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