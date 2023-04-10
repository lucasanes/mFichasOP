import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {useFicha} from '../../hooks/ficha'

export function ButtonEditHeader({segundo = false, size = 22, ...rest}) {

  const {blockPerm} = useFicha()

  return (
    <Container buttonDisabled={blockPerm.toString()}>
      <button buttonDisabled={blockPerm} disabled={blockPerm} {...rest}><MdOutlineModeEditOutline color='yellow' size={size}/></button>
    </Container>
  );
}