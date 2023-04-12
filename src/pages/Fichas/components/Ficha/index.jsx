import {Body, Button, Card, Container, Header, HeaderButtons} from './styles'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { Link, useLocation, useParams } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai'
import { toast } from 'react-toastify';
import {api} from '../../../../services/api'
import {useAuth} from '../../../../hooks/auth'
import { useState } from 'react';

export function Ficha({data}) {

  const {token} = useAuth()

  const [isPublic, setIsPublic] = useState(data.public)

  async function handleUpdate() {

    const response = await api.post('/', {
      query: 'fichas_info_update',
      token: data.token,
      sessid: token,
      dados: {
        public: isPublic == 1 ? 0 : 1
      }
    })

    if (response.data.success) {
      toast.success("Sua ficha agora está " + (isPublic == 0 ? 'pública' : 'privada') + '.')
      setIsPublic(isPublic == 1 ? 0 : 1)
    }

  }

  return (
    <Container>

      <Header>
        <h1>{data.nome} {data.sessao && ' - ' + data.sessao}</h1>
        
        <HeaderButtons>
          <Button onClick={handleUpdate} public={isPublic == 1}>
            {isPublic == 1 ? 
              <AiOutlineEye size={20} color={'#00ff88'}/> 
              : 
              <AiOutlineEyeInvisible size={20} color={'#c31437'}/>
            }
          </Button>
          <Link className='padding' target='_blank'
          to={`https://fichasop.com/sessao/personagem/portrait/?token=${data.token}`}
          ><BiUser size={20} color={'#00ffff'}/></Link>
          <Link
          to={`/ficha/${data.token}`}
          ><BsBoxArrowUpRight size={16} color={'#00ffff'}/></Link>
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

          {data.trilha && data.trilha != 'Nenhuma' ? 
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

          {data.missao && data.missao != 'Nenhuma' ?
            <Card>
              <label>Sessão:</label>
              <span>{data.missao}</span>
            </Card>
          :
            <Card>
              <label>Nacionalidade:</label>
              <span>{data.local}</span>
            </Card>
          }

          
        </div>
      </Body>

    </Container>
  );
}