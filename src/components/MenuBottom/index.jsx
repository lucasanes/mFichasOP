import {Button, Button2, Container} from './styles'
import {BsHouse} from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TiBusinessCard} from 'react-icons/ti'
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react'
import { useSwiper } from 'swiper/react'

export function MenuBottom() {

  const swiper = useSwiper()

  const [active, setActive] = useState(swiper.activeIndex)

  swiper.on('slideChange', (e) => {
    setActive(e.activeIndex)
  })

  return (
    <Container>
      <Button active={active == 0} color={'yellow'} onClick={() => swiper.slideTo(0)}><BsHouse color='#ffff50' size={30}/>Início</Button>
      <Button active={active == 1} color={'blue'} onClick={() => swiper.slideTo(1)}><AiOutlineUser color='#004edf' size={30}/>Fichas</Button>
      <Button active={active == 2} color={'red'} onClick={() => swiper.slideTo(2)}><TiBusinessCard color='#dc3545' size={30}/>Sessões</Button> 

    </Container>
  );
}