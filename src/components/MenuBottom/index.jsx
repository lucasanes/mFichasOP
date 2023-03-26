import {Button, Container} from './styles'
import {BsHouse} from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {TiBusinessCard} from 'react-icons/ti'
import { toast, ToastContainer } from 'react-toastify';

export function MenuBottom() {
  return (
    <Container>
      <Button color={'yellow'} to={'/'}><BsHouse color='#ffff50' size={30}/>Início</Button>
      <Button color={'blue'} to={'/fichas'}><AiOutlineUser color='#004edf' size={30}/>Fichas</Button>

      <Button disabled={true} onClick={() => {toast.error('Recurso em desenvolvimento!')}} color={'red'}><BiLockAlt className='lock' color='grey' size={50}/><TiBusinessCard color='#ff3b3b50' size={30}/>Sessões</Button> 

      <ToastContainer/>
    </Container>
  );
}