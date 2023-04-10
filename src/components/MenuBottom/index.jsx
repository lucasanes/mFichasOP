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

  const [disabled, setDisabled] = useState(false)
  const [active, setActive] = useState(swiper.activeIndex)

  swiper.on('slideChange', (e) => {
    setActive(e.activeIndex)
  })

  return (
    <Container>
      <Button active={active == 0} color={'yellow'} onClick={() => swiper.slideTo(0)}><BsHouse color='#ffff50' size={30}/>Início</Button>
      <Button active={active == 1} color={'blue'} onClick={() => swiper.slideTo(1)}><AiOutlineUser color='#004edf' size={30}/>Fichas</Button>

      <Button2 disabled={disabled} onClick={() => {
        toast.error('Recurso em desenvolvimento!')
        setDisabled(true)
        setTimeout(() => {
          setDisabled(false)
        }, 6000);
        }} color={'red'}><BiLockAlt className='lock' color='grey' size={50}/><TiBusinessCard color='#ff3b3b50' size={30}/>Sessões</Button2> 

    </Container>
  );
}