import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {FiTrash} from 'react-icons/fi'

export function ButtonDelete({size = 22, ...rest}) {
  return (
    <Container>
      <button {...rest}><FiTrash color='red' size={size}/></button>
    </Container>
  );
}