import { Container, Header} from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import {IoIosArrowBack} from 'react-icons/io'
import {useSessao} from '../../hooks/sessao'

export function MenuSessao() {

  const {nome} = useSessao()
  const navigate = useNavigate()

  return (
    <Container>

      <Header>

        <button onClick={() => navigate(-1)}> <IoIosArrowBack size={35} color='white'/> </button>

        <h1>{nome}</h1>

      </Header>

    </Container >
  );
}