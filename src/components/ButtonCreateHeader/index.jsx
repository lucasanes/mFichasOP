import { MdOutlineCleaningServices, MdOutlineModeEditOutline } from 'react-icons/md';
import {Container} from './styles'
import {useFicha} from '../../hooks/ficha'
import { AiOutlinePlus } from 'react-icons/ai';

export function ButtonCreateHeader({clean = false, segundo = false, size = 24, ...rest}) {

  const {blockPerm} = useFicha()

  return (
    <Container semperm={blockPerm.toString()}>
      <button disabled={blockPerm} {...rest}>{clean == false ? <AiOutlinePlus color='#00ff62' size={size}/> : <MdOutlineCleaningServices color='#00ff62' size={size}/>}</button>
    </Container>
  );
}