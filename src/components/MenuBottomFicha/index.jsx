import {Button, Container} from './styles'
import {BsFillInfoCircleFill, BsFillPersonVcardFill, BsHouse, BsInfoCircle} from 'react-icons/bs'
import {BiUser, BiUserCircle } from 'react-icons/bi'
import { FaDiceD20, FaUserCircle, FaUserSecret, FaUserTie } from 'react-icons/fa'
import { TbBackpack } from 'react-icons/tb'
import { GiAxeSword, GiBackpack, GiBowArrow, GiDiceTwentyFacesTwenty, GiGymBag, GiSecretBook } from 'react-icons/gi'
import {useSwiper} from 'swiper/react'
import { useState } from 'react'
import { GrContactInfo } from 'react-icons/gr'

export function MenuBottomFicha() {

  const swiper = useSwiper()
  const [active, setActive] = useState(swiper.activeIndex)

  swiper.on('slideChange', () => {
    setActive(swiper.activeIndex)
  })

  return (
    <Container>

      <Button 
      hover={active == 0} 
      onClick={() => swiper.slideTo(0)}
      ><BsInfoCircle color='#ffffff' size={30}/></Button>
      <Button 
      hover={active == 1} 
      onClick={() => swiper.slideTo(1)}
      ><FaUserTie color='#fff' size={28}/></Button>
      <Button 
      hover={active == 2} 
      onClick={() => swiper.slideTo(2)}
      ><GiBowArrow color='#fff' size={35}/></Button>
      <Button 
      hover={active == 3} 
      onClick={() => swiper.slideTo(3)}
      ><GiAxeSword color='#fff' size={31}/></Button>
      <Button 
      hover={active == 4} 
      onClick={() => swiper.slideTo(4)}
      ><GiBackpack color='#fff' size={35}/></Button>
      <Button 
      hover={active == 5} 
      onClick={() => swiper.slideTo(5)}
      ><GiSecretBook color='#fff' size={33}/></Button>
      <Button 
      hover={active == 6} 
      onClick={() => swiper.slideTo(6)}
      ><GiDiceTwentyFacesTwenty color='#fff' size={33}/></Button>
     
    </Container>
  );
}