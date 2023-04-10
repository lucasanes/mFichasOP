import { useFicha } from '../../hooks/ficha';
import {Container} from './styles'
import {FiTrash} from 'react-icons/fi'

export function ButtonDeleteComponent({text = false, size = 22, ...rest}) {

  const {blockPerm} = useFicha()

  return (
    <Container buttonDisabled={blockPerm.toString()}>
      <button disabled={blockPerm} {...rest}>{text && 'Deletar'} <FiTrash color='red' size={size}/></button>
    </Container>
  );
}