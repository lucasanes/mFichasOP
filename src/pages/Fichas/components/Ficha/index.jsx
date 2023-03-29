import {Body, Card, Container, Header, HeaderButtons} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Ficha({data}) {
  return (
    <Container>

      <Header>
        <h1>{data.nome} {data.sessao && ' - ' + data.sessao}</h1>
        
        <HeaderButtons>
          <Link to={`/ficha/${data.token}`}
          ><BsBoxArrowUpRight color={'cyan'}/></Link>
        </HeaderButtons>
      </Header>

      <Body>
        <img src={data.foto}/>

        <div className='grid'>
          <Card>
            <label>Origem:</label>
            <span>{data.origem}</span>
          </Card>

          <Card>
            <label>Classe:</label>
            <span>{data.classe} - {data.nex}%</span>
          </Card>

          {data.trilha != 'Nenhuma' ? 
          <Card>
            <label>Trilha:</label>
            <span>{data.trilha}</span>
          </Card>
          :
          <Card>
            <label>Idade:</label>
            <span>{data.idade}</span>
          </Card>
          }

          <Card>
            <label>Nacionalidade:</label>
            <span>{data.local}</span>
          </Card>
        </div>
      </Body>

    </Container>
  );
}