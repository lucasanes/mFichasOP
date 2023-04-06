import { ButtonDeleteComponent } from '../../../../../components/ButtonDeleteComponent';
import { ButtonEditComponent } from '../../../../../components/ButtonEditComponent';
import { Header } from '../styles';
import {Container, Header1} from './styles'

export function Proficiencia({data}) {
  return (
    <Container>
      <Header1>
        <span>{data.nome}</span>
        <ButtonEditComponent size={18}/>
        <ButtonDeleteComponent size={18}/>
      </Header1>
    </Container>
  );
}