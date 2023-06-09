import { ButtonCreateHeader } from '../../../../components/ButtonCreateHeader';
import { Ut } from './Ut';
import {Body, Container, Header} from './styles'

export function UTContainer({data, setData}) {
  return (
    <Container>

      <Header>
        <h1>Últimos Testes</h1>
        <ButtonCreateHeader clean onClick={() => setData([])}/>
      </Header>

      <hr />

      <Body>
        {data.map((ut, i) => <Ut key={`${i}-${ut.hora}`} data={ut}/>)}
      </Body>

    </Container>
  );
}