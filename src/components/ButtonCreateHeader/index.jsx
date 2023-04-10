import { MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {useFicha} from '../../hooks/ficha'
import { AiOutlinePlus } from 'react-icons/ai';

export function ButtonCreateHeader({segundo = false, size = 24, ...rest}) {

  const {blockPerm} = useFicha()

  return (
    <Container semperm={blockPerm.toString()}>
      <button disabled={blockPerm} {...rest}><AiOutlinePlus color='#00ff62' size={size}/></button>
    </Container>
  );
}