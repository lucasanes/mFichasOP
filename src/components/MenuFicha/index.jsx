import { Container, Header} from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import {IoIosArrowBack} from 'react-icons/io'
import {useFicha} from '../../hooks/ficha'

export function MenuFicha() {

  const {nome} = useFicha()
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