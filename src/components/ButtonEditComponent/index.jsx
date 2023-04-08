import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'

export function ButtonEditComponent({onClick, segundo = false, size = 22, ...rest}) {
  return (
    <Container {...rest}>
      <button onClick={onClick}><MdOutlineModeEditOutline color='yellow' size={size}/></button>
    </Container>
  );
}