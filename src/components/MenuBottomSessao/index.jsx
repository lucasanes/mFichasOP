import {Button, Container} from './styles'
import { FaUserTie, FaUsers } from 'react-icons/fa'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { GiAxeSword, GiBackpack, GiBowArrow, GiDiceTwentyFacesTwenty, GiFishMonster, GiGymBag, GiNotebook, GiSecretBook } from 'react-icons/gi'
import {useSwiper} from 'swiper/react'
import { useState } from 'react'

export function MenuBottomSessao() {

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
      ><FaUserTie  color='#ffffff' size={28}/></Button>
      <Button 
      hover={active == 1} 
      onClick={() => swiper.slideTo(1)}
      ><RxCounterClockwiseClock color='#fff' size={28}/></Button>
      <Button 
      hover={active == 2} 
      onClick={() => swiper.slideTo(2)}
      ><GiAxeSword color='#fff' size={30}/></Button>
      <Button 
      hover={active == 3} 
      onClick={() => swiper.slideTo(3)}
      ><GiDiceTwentyFacesTwenty color='#fff' size={33}/></Button>
      <Button 
      hover={active == 4} 
      onClick={() => swiper.slideTo(4)}
      ><GiNotebook color='#fff' size={31}/></Button>
      <Button 
      hover={active == 5} 
      onClick={() => swiper.slideTo(5)}
      ><FaUsers color='#fff' size={33}/></Button>
      <Button 
      hover={active == 6} 
      onClick={() => swiper.slideTo(6)}
      ><GiFishMonster color='#fff' size={33}/></Button>
     
    </Container>
  );
}