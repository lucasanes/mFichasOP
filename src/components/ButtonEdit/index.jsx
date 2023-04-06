import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'

export function ButtonEdit({segundo = false, size = 22, ...rest}) {
  return (
    <Container segundo={segundo}>
      <button {...rest}><MdOutlineModeEditOutline color='yellow' size={size}/></button>
    </Container>
  );
}