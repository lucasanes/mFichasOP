import { ButtonDelete } from '../../../../../components/ButtonDelete';
import { ButtonEdit } from '../../../../../components/ButtonEdit';
import { Header } from '../styles';
import {Container, Header1} from './styles'

export function Proficiencia({data}) {
  return (
    <Container>
      <Header1>
        <span>{data.nome}</span>
        <ButtonEdit segundo size={18}/>
        <ButtonDelete size={18}/>
      </Header1>
    </Container>
  );
}