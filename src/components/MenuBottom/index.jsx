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
      <Button color={'red'} to={'/fichas'}><AiOutlineUser color='#ff3b3b' size={30}/>Fichas</Button>

      <Button disabled={true} onClick={() => {toast.error('Recurso em desenvolvimento!')}} color={'blue'}><BiLockAlt className='lock' color='grey' size={50}/><TiBusinessCard color='#004edf50' size={30}/>Sessões</Button> 

      <ToastContainer/>
    </Container>
  );
}