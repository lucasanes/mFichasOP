import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {FiTrash} from 'react-icons/fi'

export function ButtonDeleteComponent({text = false, size = 22, ...rest}) {
  return (
    <Container>
      <button {...rest}>{text && 'Deletar'} <FiTrash color='red' size={size}/></button>
    </Container>
  );
}