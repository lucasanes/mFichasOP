import {Button, Container} from './styles'
import {BsFillPersonVcardFill, BsHouse} from 'react-icons/bs'
import {BiUserCircle } from 'react-icons/bi'
import { FaDiceD20 } from 'react-icons/fa'
import { TfiBag } from 'react-icons/tfi'
import { GiAtom, GiAxeSword, GiSecretBook, GiSpellBook } from 'react-icons/gi'
import {useFicha} from '../../hooks/ficha'

export function MenuBottomFicha() {

  const {body, setBody} = useFicha()

  return (
    <Container>

      <Button focus={body == 'principal'} onClick={() => setBody('principal')}><BsFillPersonVcardFill color='#fff' size={32}/></Button>
      <Button focus={body == 'status'}  onClick={() => setBody('status')}><BiUserCircle color='#fff' size={35}/></Button>
      <Button focus={body == 'pericias'}  onClick={() => setBody('pericias')}><GiAtom color='#fff' size={35}/></Button>
      <Button focus={body == 'hpe'}  onClick={() => setBody('hpe')}><GiAxeSword color='#fff' size={31}/></Button>
      <Button focus={body == 'inventario'}  onClick={() => setBody('inventario')}><TfiBag color='#fff' size={30}/></Button>
      <Button focus={body == 'rituais'}  onClick={() => setBody('rituais')}><GiSecretBook color='#fff' size={33}/></Button>
      <Button focus={body == 'dados'}  onClick={() => setBody('dados')}><FaDiceD20 color='#fff' size={29}/></Button>
     
    </Container>
  );
}