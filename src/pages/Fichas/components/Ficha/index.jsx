import {Body, Card, Container, Header, HeaderButtons} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'

export function Ficha({data}) {
  return (
    <Container>

      <Header>
        <h1>{data.nome}</h1>
        
        <HeaderButtons>
          <BsBoxArrowUpRight color={'cyan'}/>
        </HeaderButtons>
      </Header>

      <Body>
        <img src={data.foto}/>

        <div>
          <Card>
            <label></label>
            <span></span>
          </Card>

          <Card>
            <label></label>
            <span></span>
          </Card>

          <Card>
            <label></label>
            <span></span>
          </Card>

          <Card>
            <label></label>
            <span></span>
          </Card>
        </div>
      </Body>

    </Container>
  );
}