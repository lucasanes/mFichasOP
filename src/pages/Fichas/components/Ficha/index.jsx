import {Body, Card, Container, Header, HeaderButtons} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Ficha({data}) {
  return (
    <Container>

      <Header>
        <h1>{data.nome}</h1>
        
        <HeaderButtons>
          <Link onClick={() => toast.error('Sua senha precisa ter no mínimo 8 dígitos, um caractere maiúsculo e um minúsculo, e um número.'
)}
          // to={`/ficha/${data.token}`}
          ><BsBoxArrowUpRight color={'cyan'}/></Link>
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