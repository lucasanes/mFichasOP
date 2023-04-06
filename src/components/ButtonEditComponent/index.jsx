import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'

export function ButtonEditComponent({segundo = false, size = 22, ...rest}) {
  return (
    <Container>
      <button {...rest}><MdOutlineModeEditOutline color='yellow' size={size}/></button>
    </Container>
  );
}