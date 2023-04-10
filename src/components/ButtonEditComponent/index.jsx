import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {useFicha} from '../../hooks/ficha'

export function ButtonEditComponent({onClick, segundo = false, size = 22, ...rest}) {

  const {blockPerm} = useFicha()

  return (
    <Container buttonDisabled={blockPerm.toString()} {...rest}>
      <button disabled={blockPerm} onClick={onClick}><MdOutlineModeEditOutline color='yellow' size={size}/></button>
    </Container>
  );
}