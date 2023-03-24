import {Button, Container} from './styles'
import {BsHouse} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {TiBusinessCard} from 'react-icons/ti'

export function MenuBottom() {
  return (
    <Container>
      <Button to={'/'}><BsHouse size={30}/>Início</Button>
      <Button to={'/sessoes'}><AiOutlineUser size={30}/>Fichas</Button>
      <Button to={'/fichas'}><TiBusinessCard size={30}/>Sessões</Button>
    </Container>
  );
}